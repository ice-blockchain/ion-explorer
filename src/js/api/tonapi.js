import {TONAPI_ENDPOINT} from '~/config.js';
import {canonizeAddress} from '~/tonweb.js';
import axios from 'axios';

const http = axios.create({
    baseURL: TONAPI_ENDPOINT,
});

/**
 * @param  {String} address
 * @return {Promise<Array>}
 */
export const getJettonBalances = async function(address) {
    // v.1.0
    // const response = await http.get('jetton/getBalances', { params: {
    //     account: address,
    // }});

    // v.1.0
    // const balances = (response.data.balances || []).map((balance) => Object.freeze({
    //     address: canonizeAddress(balance.wallet_address.address),
    //     balance: balance.balance,
    //     jetton_address: canonizeAddress(balance.jetton_address),
    //     jetton_meta: Object.freeze({
    //         name: balance.metadata?.name,
    //         description: balance.metadata?.description,
    //         symbol: balance.metadata?.symbol,
    //         image_data: null,
    //         decimals: balance.metadata?.decimals,
    //         image: Object.freeze({
    //             w72: balance.metadata?.image,
    //             w144: balance.metadata?.image,
    //             w216: balance.metadata?.image,
    //         }),
    //     }),
    // }));

    // v.2.0
    const response = await http.get('jetton/wallets', {
        params: {
            owner_address: address,
        }
    });

    // Load jetton metadata
    response.data.jetton_wallets = await Promise.all(response.data/*.jetton_wallets*/.map(async (wallet) => {

        const mastersResponse = await http.get('jetton/masters', {
            params: {
                address: wallet.jetton,
            }
        });

        wallet.master = mastersResponse.data.jetton_masters[0];

        return wallet;
    }));

    // v.2.0
    return (response.data.jetton_wallets || []).map((wallet) => {

        const content = wallet.master.jetton_content;

        return Object.freeze({
            address: canonizeAddress(wallet.address),
            balance: wallet.balance,
            jetton_address: canonizeAddress(wallet.master.address),
            jetton_meta: Object.freeze({
                name: content.name,
                description: content.description,
                symbol: content.symbol,
                image_data: null,
                decimals: content.decimals,
                image: Object.freeze({
                    w72: content.image,
                    w144: content.image,
                    w216: content.image,
                }),
            }),
        })
    });
};
