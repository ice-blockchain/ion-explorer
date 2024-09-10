import axios from 'axios';
import { TONCENTER_V2_API_ENDPOINT, TONCENTER_API_KEY } from '~/config.js';
import { hexToBase64 } from '~/utils.js';
import { canonizeAddress } from '~/tonweb.js';

// Disable headers if api key is not set. Otherwise
// axios will make a pre-flight request:
const httpHeaders = TONCENTER_API_KEY
    ? { 'X-API-Key': TONCENTER_API_KEY }
    : undefined;

const http = axios.create({
    baseURL: TONCENTER_V2_API_ENDPOINT,
    headers: httpHeaders,
});

/**
 * Loads the list, containing a single block, identified by the workchain / shard and sequence number.
 *
 * @param workchain
 * @param shard
 * @param seqno
 * @returns {Promise<*>}
 */
export const loadBlockDetails = async function ({workchain, shard, seqno}) {

    const results = await http.get('blocks', {
        params: {
            workchain,
            shard,
            seqno
        }
    })

    return results.data[0];
};

/**
 * This function returns last blocks sorted by time.
 *
 * @param  {Numer} options.wc
 * @param  {Number} options.limit
 * @param  {Number} options.offset
 * @param  {Number} options.startUtime
 * @param  {Number} options.endUtime
 * @return {Promise<Array>}
 */
export const getPreviousBlocks = async function ({ wc, limit, offset, startUtime, endUtime }) {
    let { data: result } = await http.get('blocks', {
        params: {
            workchain: wc,
            limit: limit || 1,
            offset: offset,
            start_utime: startUtime,
            end_utime: endUtime,
            sort: 'desc',
        },
    });

    result.forEach((block) => {
        block.root_hash_hex = block.root_hash;
        block.root_hash = hexToBase64(block.root_hash);
    });

    // Some previous version to filter-out blocks without transactions
    // result = result.filter((block) => {
    //    if (!block) {
    //         return false;
    //     }
    //     return block.tx_count > 0;
    // });

    return result.sort((a, b) => b.seqno - a.seqno).map(Object.freeze);
};

const getSourceAndDestination = function (msg, address, hash) {
    const from = msg.source ? canonizeAddress(msg.source) : null;
    const to = msg.destination ? canonizeAddress(msg.destination) : null;

    return {
        from, to,
        is_out: address === from,
        amount: msg.value || null,
        created_at: msg.created_at,
        hash: hexToBase64(hash),
    };
};

const mapTransactions = async function(result) {

    const transactions = result.map((tx) => {
        const address = tx.account;
        const hash = tx.hash;

        const is_service = !tx.in_msg && tx.out_msgs.length === 0;
        const is_external = tx.out_msgs.length == 0 && !tx.in_msg?.source && tx.in_msg?.destination == address;
        let msg = undefined;

        if (is_service) {
            msg = {
                source: address,
                destination: null,
                created_at: tx.created_at || tx.now,
            };

        } else if (tx.out_msgs.length > 0) {
            msg = tx.out_msgs.at(-1);

        } else {
            msg = tx.in_msg;
        }

        const sourceAndDestination = getSourceAndDestination(msg, address, hash);

        sourceAndDestination.is_service = is_service;
        sourceAndDestination.is_external = is_external;
        sourceAndDestination.created_at = tx.now;
        sourceAndDestination.lt = tx.lt;
        sourceAndDestination.account = tx.account_friendly;

        return sourceAndDestination;
    });

    return transactions.sort((a, b) => b.created_at - a.created_at).map(Object.freeze);
};

/**
 * Loads the list of transactions for a given block.
 *
 * @param workchain
 * @param shard
 * @param seqno
 * @returns {Promise<*>}
 */
export const loadBlockTransactions = async function({workchain, shard, seqno}) {
    const { data: result } = await http.get('transactions', {
        params: {
            workchain,
            shard,
            seqno
        },
    });

    return await mapTransactions(result);
};

/**
 * @param  {Number} options.wc
 * @param  {Number} options.startUtime
 * @param  {Number} options.endUtime
 * @return {Promise<Array>}
 */
export const getAllTransactions = async function ({ wc, limit, startUtime, endUtime } = {}) {
    const { data: result } = await http.get('transactions', {
        params: {
            workchain: wc,
            limit: limit,
            start_utime: startUtime,
            end_utime: endUtime,
            sort: 'desc',
        },
    });

    return await mapTransactions(result);
};
