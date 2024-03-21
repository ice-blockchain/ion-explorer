export default {
    header: {
        search_placeholder: 'Search by address or domain',
        search_domain_error: 'Domain misconfigured or does not exist',
        search_address_error: 'Please enter a valid ION address',
    },

    indexpage: {
        meta: {
            title: 'ION Explorer — a universal browser for the ICE blockchain',
            description: 'All information on the ICE blockchain in an accessible and user-friendly way on the ION Explorer platform. Search for transactions, addresses, pools, nominators and more.',
        },
        search_placeholder: 'Search ION addresses, domains and transactions...',
        search_domain_error: 'Domain misconfigured or does not exist',
        search_address_error: 'Please enter a valid ION address',
    },

    search: {
        category: {
            wallet: 'Wallet',
            nft: 'NFT collection',
            pool: 'Pool',
        },
    },

    settings: {
        title: 'Settings',
        language: {
            title: 'Language',
            en: 'English',
            ru: 'Русский',
        },
        theme: {
            title: 'Theme',
            light: 'Light',
            dark: 'Dark',
            auto: 'Auto',
        },
    },

    address: {
        meta: {
            title: '{address} address transactions · ION Explorer',
            description: 'Details of {address}: balance, transactions and other information. Track data in real time.',
        },

        info: {
            address: 'Address',
            copy_success: 'Address copied',
            balance: 'Balance',
            last_activity: 'Last activity',
            state: 'State',
            type_frozen: 'Frozen',
            type_active: 'Active',
            type_suspended: 'Suspended',
            type_inactive: 'Inactive',
            contract_type: 'Contract Type',
            no_activity: 'No transactions',
        },

        contract_type: {
            wallet: 'Wallet',
            nft_collection: 'NFT Collection',
            nft_item: 'NFT Item',
            jetton: 'Jetton',
            jetton_wallet: 'Jetton Wallet',
            nominator_pool: 'Nominator Pool',
            nominator_pool_single: 'Single Nominator Pool',
            locker: 'Locker',
            vesting_wallet: 'Vesting Wallet',
            unknown: 'Unknown',
            domain_name: 'Domain',
            dns_domain: '.ton domain',
            nft_sale: 'NFT item sale',
            nft_offer: 'NFT item offer',
            subscription: 'Subscription',
            telegram_username: 'Telegram username',
            telegram_number: 'Anonymous number',
            other: 'Other',
            sale: {
                sale_info: '{0} for {1}',
                on_auction: 'on auction',
                on_sale: 'on sale',
            },
            storage_provider: {
                name: 'Storage provider',
                rate_template: '{period} rate:',
                rate_value_hour: 'Hourly',
                rate_value_day: 'Daily',
                rate_value_month: 'Monthly',
                rate_value_year: 'Yearly',
                bytes_template: 'per {value}',
                bytes_value_mb: 'MiB',
                bytes_value_gb: 'GiB',
                bytes_value_tb: 'TiB',
            },
            subscription_modal_header: 'Subscription contract',
            nft_sale_modal_header: 'NFT item sale contract',
        },

        tab_nfts: 'NFTs',
        tab_transactions: 'History',
        tab_contract: 'Contract',
        tab_tokens: 'Jettons',

        tx_table: {
            empty: 'No transaction history',
            age: 'Age',
            from: 'From',
            to: 'To',
            value: 'Value',
            input: 'IN',
            output: 'OUT',
            log: 'LOG',
            nowhere: 'Nowhere',
            external: 'external',
            address_count: 'empty | {n} address | {n} addresses',
        },

        all_tx_table: {
            sender: 'Sender',
            recipient: 'Recipient',
            title: 'Last transactions',
            to: 'TO'
        },

        nfts: {
            no_nfts: 'User doesn\'t own any nft',
            no_collection: 'Standalone NFT',
        },

        tokens: {
            no_tokens: 'User doesn\'t own any jettons',
            table_token_name: 'Jetton',
            table_token_balance: 'Balance',
            table_token_jetton_wallet: 'Jetton wallet',
            show_empty_tokens: 'Show {0} empty wallets'
        },

        contract: {
            admonition: {
                verified_title: 'Verified sources',
                verified_text: 'This source code compiles to the same exact bytecode that is found on-chain. Verification was carried out using the {verifier}.',
                unverified_title: 'Unverified contract',
                unverified_text: 'We don\'t have the source codes for this contract. You may publish them via {verifier}.',
                verifier_link_text: 'verification tool',
                inactive_title: 'Uninitialized address',
                inactive_text: 'This address doesn\'t contain any data in blockchain — it was either never used or the contract was deleted. Now it just aimlessly floats in the digital void.',
            },

            tab_raw_source: 'Bytecode',
            tab_raw_data: 'Raw data',

            info: 'Info',
            code: 'Code',
            data: 'Data',
            source_hex: 'hex',
            source_tvm: 'disassembled',
            source_base64: 'base64',
            source_cells: 'cells',
            info_description: 'This address is {type} smart contract.',
            info_source: 'Its source code is {link}.',
            source_code: 'available on GitHub',
            types: {
                wallet: 'a wallet',
                lockup_wallet: 'a lockup wallet',
                nft_collection: 'an NFT collection',
                nft_item: 'an NFT item',
                elector: 'a validator elector',
            },
        },
    },

    tx: {
        meta: {
            title: 'ICE Explorer :: Transaction {hash}',
        },
        title: 'Transaction details',
        account: 'Account',
        status: 'Status',
        status_success: 'Success',
        status_failed: 'Failed',
        exit_codes: 'Exit codes',
        compute_phase: 'compute phase',
        action_phase: 'action phase',
        phase_aborted: 'aborted',
        error_icon_tooltip: 'Failed with exit code {0}',
        exit_code_success: 'OK',
        exit_code_error: 'Error, exit code {0}',
        timestamp: 'Timestamp',
        workchain: 'Workchain',
        seqno: 'Seqno',
        shard: 'Shard',
        fee: 'Fee',
        message: 'Message',
        encrypted: 'Encrypted',
        encrypted_message: 'Encrypted message',
        hash: 'Hash',
        lt: 'Logical time',
        msgs: 'Messages',
        msgs_empty: 'No messages',
        msgs_count: '{0} input, {1} output',
        hash_copy_success: 'Tx hash copied',
        lt_copy_success: 'LT copied to clipboard',
    },

    block: {
        nav: {
            prev: 'Prev block',
            next: 'Next block',
            latest: 'Latest',
        },
        masterchain_block_title: 'Masterchain Block',
        shardchain_block_title: 'Shardchain Block',
        shardchain_blocks_title: 'Shardchain Blocks',
        transactions_title: 'Transactions',
        show_details: 'Show {0} boring details',
    },

    blocks: {
        last_masterchain_blocks_title: 'Last masterchain blocks',
        last_workchain_blocks_title: 'Last workchain blocks',
        block_time: 'Last block time',
        tx_per_second: "TX per second",
        transactions: 'Transactions',
        block: 'Block',
        workchain: 'Workchain',
        hash: 'Hash'
    },

    nft: {
        collection: {
            meta: {
                title: '{name} NFT collection :: ICE Explorer',
                description: 'View {count} NFT items of {name} collection in ICE blockchain explorer.',
            },
            item_count: 'No items | {n} item | {n} items',
            empty_collection_header: 'Empty collection',
            empty_collection_text: 'Seems like there\'re no items in this collection. Try refreshing the page, or go to the {0}.',
            empty_collection_text_account_link: 'account overview',
            nonseq_collection_header: 'Special collection',
            nonseq_collection_text: 'We did our best, but still couldn\'t display this collection. Try visiting this page later, or go to the {0}.',
            nonseq_collection_text_account_link: 'account overview',
        },
        item: {
            meta: {
                title: '{name} NFT item (#{index}) :: ICE Explorer',
                title_standalone: '{name} NFT item :: ICE Explorer',
            },
            collection: 'Collection',
            no_collection: 'None',
            owner: 'Owner',
            number: 'Number',
            metadata_source: 'Metadata',
            metadata_source_onchain: 'Onchain',
            metadata_source_offchain: 'External',
            metadata_view_source: 'view source',
            attributes: 'Attributes',
            no_attributes: 'None',
            recent_tx: 'Recent transactions',
            preview: {
                index: 'Item {index} of {total}',
                error_text: 'Error loading NFT',
                error_button: 'Try again',
            },
        },
        error: {
            redirect_invalid: 'This address in not an NFT',
        },
    },

    jetton: {
        admin_address: 'Owner',
        admin_address_empty: 'None',
        admin_address_empty_explanation: '(the owner have revoked their rights)',
        supply: 'Total supply',
        mutable: 'Mutable',
        tokens: 'Jettons',
        metadata_source: 'Metadata',
        search_wallet: 'Search wallet',
        search_wallet_placeholder: 'Insert your wallet address',
        recent_tx: 'Recent transactions',
        top_holders: 'Top holders',
        wallet: {
            title: 'Jetton Wallet',
            owner: 'Owner',
            jetton: 'Jetton',
        },
        error: {
            redirect_invalid: 'This address in not a jetton',
        },
    },

    nominator_pool: {
        title: 'Nominator Pool',
        title_help_link: 'https://blog.ton.cat/p/e9387b54-4975-4d09-bab8-8afbec7ac95b',
        button_loading: 'Loading...',
        button_disabled: 'No empty slots',
        button_add_stake: 'Add stake',
        button_send_ton: 'Send ICE',
        help_text_disabled: 'impossible to add stake: no empty slots at the moment',
        help_text_add_stake: 'send at least <b>{0} ICE</b> with "<b>d</b>" text comment',
        validator: 'Validator',
        nominator_count: 'Nominators',
        nominator_count_value: '{count} of {total}',
        stake: 'Stake',
        stake_validator: 'Validator',
        stake_nominators: 'Nominators',
        stake_total: 'Total',
        start_date: 'Start date',
        reward_share: 'Income share',
        reward_share_validator: 'Validator',
        reward_share_nominators: 'Nominators',
        min_stake: 'Min stake',
        min_stake_validator: 'Validator',
        min_stake_nominator: 'Nominator',
        tab_transactions: 'Transactions',
        tab_nominators: 'Nominators',
        nominator_table_empty: 'No nominators',
        nominator_table_stake: 'Stake',
        nominator_table_pie: 'Pie',
        nominator_table_pending: 'Pending',
        nominator_table_withdrawal: 'Withdrawing',
        tab_votings: 'Votings',
        voting_table_empty: 'No votings at the moment',
        voting_table_proposal_hash: 'Proposal hash',
        voting_table_created_at: 'Created',
        votes: {
            cast_vote: 'Cast a vote',
            vote_list: 'Votes',
            disclaimer: 'Only validator and nominators may cast a vote.',
            vote_list_empty: 'No votes yet',
            votes_table_supported: 'Vote',
            votes_table_date: 'Date',
        },
        votes_bar: {
            title: 'Voting result',
            in_favor: 'In favor',
            against: 'Against',
            abstained: 'Abstained',
        },
        error: {
            redirect_invalid: 'This address is not a nominator pool',
        },
    },

    single_nominator: {
        pool: 'Single nominator pool',
        owner: 'Owner',
        title_help_link: 'https://github.com/orbs-network/single-nominator',
        error: {
            redirect_invalid: 'This address is not single nominator smart contract',
        },
    },

    vesting: {
        vesting: 'Vesting',
        address: 'Vesting address',
        owner: 'Owner',
        total: 'Total',
        available: 'Available',
        locked: 'Locked',
        duration: 'Duration',
        vesting_duration: 'Vesting duration',
        cliff_period: 'Cliff period',
        unlock: 'Unlock',
        unlock_text: 'Every {n} after cliff period',
        start: 'Vesting start',
        link: 'Open on vesting.ton.org',
        title_help_link: 'https://blog.ton.cat/vesting',
        error: {
            redirect_invalid: 'This address is not vesting smart contract',
        },
    },

    locker: {
        title: 'The Locker',
        total_deposits: 'Total deposits',
        total_rewards: 'Total rewards',
        storage: 'Storage',
        deposits_until: 'Accept deposits until',
        unlock: 'Unlock',
        unlock_text: 'Every {n} after vesting period',
        title_help_link: 'https://blog.ton.cat/locker',
        error: {
            redirect_invalid: 'This address is not locker smart contract',
        },
    },

    suspended: {
        header: 'Suspended addresses',
        description: 'To provide additional clarity regarding Toncoin tokenomics, these 171 early miners\' wallets were suspended through <a href="https://t.me/tonblockchain/182">validators\' voting</a> for a duration of 4 years until February 21, 2027',
        about: 'This and {0} of inactive early miners were suspended by validators voting',
        about_address_count: '170 more addresses',
    },

    subscription: {
        contract_description_html: 'This is a <strong>subscription</strong> smart contract. It periodically sends TONs to <strong>beneficiary</strong>, in exchange to access to services like Telegram channel or whatnot.',
        subscriber: 'Subscriber',
        beneficiary: 'Beneficiary',
        price: 'Price',
        first_payment_date: 'First payment',
        last_payment_date: 'Last payment',
        subscription_id: 'ID',
        period: {
            monthly: 'per month',
        },
    },

    nft_sale: {
        contract_description_html: 'This is a <strong>NFT sale</strong> smart contract. It passes the NFT item to the buyer as soon as they pay the required amount of TONs.',
        nft_item: 'NFT item',
        price: 'Price',
        is_active: 'Active',
        closed_help_text: '(no longer on sale)',
        purchase: 'Purchase',
        marketplace: 'Marketplace',
        seller: 'Seller',
        fees: 'Fees',
        marketplace_fee: 'Marketplace',
        royalty: 'Royalty',
    },

    common: {
        address: 'Address',
        loading: 'Loading...',
        load_more: 'Load more',
        show_more: 'Show more',
        no_description: 'No description',
        unknown: 'Unknown',
        no_data: 'No data',
        empty: 'empty',
        what_is_this: 'What is it?',
        yes: 'Yes',
        no: 'No',
        about: 'About',
        total: 'Total',
        raw_metadata: 'Raw metadata',
        nft_item: 'NFT item',
        general: 'General',
        time: 'Time',
        day: 'Day',
        week: 'Week',
        two_weeks: 'Two weeks',
        month: 'Month',
        year: 'Year',
        y: 'y',
        d: 'd',
        h: 'h',
        seconds: 'second | seconds',
    },

    stats: {
        masterchain_height: 'Masterchain height',
        block_time: 'Block time: {time}s',
        transactions_count: 'User transaction count',
        transactions_per_second: '{n} transaction per second | {n} transactions per second',
        circulation: 'Circulation',
        total_supply: 'Total supply',
        percent_total_supply: '{total}% of total supply',
        percent_inflation_rate: '0.6% annual inflation rate',
        validators: 'Validators',
        validators_amount: 'Validators',
        validators_election: 'Next round {n}',
        market_data: 'Market data',
        price: 'ICE Price',
        capitalization: 'Capitalization',
        trading_volume: 'Trading volume',
        contract_types: 'Contract types',
        total_addresses: 'total addresses',
        address_count: 'Address count',
        transaction_count: 'Transaction count',
        volume: 'Volume',
        user: 'User',
        service: 'Service',
        staking: 'Staking',
        total_staked: 'Total staked',
        total_stake: 'Total stake',
        frozen_stake: 'Frozen stake',
        weight: 'Weight',
        apy: 'APY',
        staking_apy: 'Staking APY',
        validation_status: 'Validation status',
        round_started: 'Round started',
        round_ends: 'Round ends',
        election_id: 'Election ID',
        election: 'Election',
        delay: 'Delay',
        validation: 'Validation',
        hold: 'Hold',
        next_round: 'Next round',
    },

    config: {
        menu: 'Parameters',
        no_value: 'This parameter has no value',
        explore_address: 'Explore blockchain address',
        blackhole_addr: 'Blackhole address',
        fee_burn_nom: 'Fee burn nom',
        fee_burn_denom: 'Fee burn denom',
        currencies: 'Currencies',
        currency_id: 'Currency id',
        amount: 'Amount',
        version: 'Version',
        capabilities: 'Capabilities',
        normal_params: 'Normal params',
        critical_params: 'Critical params',
        min_tot_rounds: 'Min. total rounds',
        max_tot_rounds: 'Max. total rounds',
        min_wins: 'Min. wins',
        max_losses: 'Max. losses',
        min_store_sec: 'Min. store seconds',
        max_store_sec: 'Max. store seconds',
        bit_price: 'Bit price',
        cell_price: 'Cell price',
        workchains: 'Workchains',
        workchain: 'Workchain',
        enabled_since: 'Enabled since',
        actual_min_split: 'Actual min. split',
        min_split: 'Min. split',
        max_split: 'Max. split',
        basic: 'Basic',
        active: 'Active',
        accept_msgs: 'Accept messages',
        flags: 'Flags',
        zerostate_root_hash: 'Zerostate root hash',
        zerostate_file_hash: 'Zerostate file hash',
        masterchain_block_fee: 'Masterchain block fee',
        basechain_block_fee: 'Basechain block fee',
        validators_elected_for: 'Validators elected for',
        elections_start_before: 'Elections start before',
        elections_end_before: 'Elections end before',
        stake_held_for: 'Stake held for',
        max_validators: 'Max. validators',
        max_main_validators: 'Max. main validators',
        min_validators: 'Min. validators',
        min_stake: 'Min. stake',
        max_stake: 'Max. stake',
        min_total_stake: 'Min. total stake',
        max_stake_factor: 'Max stake factor',
        utime_since: 'Utime since',
        bit_price_ps: 'Price per bit',
        cell_price_ps: 'Price per cell',
        mc_bit_price_ps: 'Masterchain price per bit',
        mc_cell_price_ps: 'Masterchain price per cell',
        gas_limits_prices: 'Gas limit prices',
        special_gas_limit: 'Special gas limit',
        flat_gas_limit: 'Flat gas limit',
        flat_gas_price: 'Flat gas price',
        gas_price: 'Gas price',
        gas_limit: 'Gas limit',
        gas_credit: 'Gas credit',
        block_gas_limit: 'Block gas limit',
        freeze_due_limit: 'Freeze due limit',
        delete_due_limit: 'Delete due limit',
        bytes: 'Bytes',
        gas: 'Gas',
        lt_delta: 'LT delta',
        underload: 'Underload',
        soft_limit: 'Soft limit',
        hard_limit: 'Hard limit',
        msg_forward_prices: 'Message forward prices',
        lump_price: 'Lump price',
        ihr_price_factor: 'IHR price factor',
        first_frac: 'First frac',
        next_frac: 'Next frac',
        new_catchain_ids: 'New catchain ids',
        round_candidates: 'Candidates per round',
        next_candidate_delay_ms: 'Next candidate delay',
        consensus_timeout_ms: 'Consensus timeout',
        fast_attempts: 'Fast attempts',
        attempt_duration: 'Attempt duration',
        catchain_max_deps: 'Catchain max. deps',
        max_block_bytes: 'Max. block bytes',
        max_collated_bytes: 'Max. collated bytes',
        proto_version: 'Proto version',
        catchain_max_blocks_coeff: 'Catchain max. blocks coefficient',
        shuffle_mc_validators: 'Shuffle masterchain validators',
        mc_catchain_lifetime: 'Masterchain catchain lifetime',
        shard_catchain_lifetime: 'Shard catchain lifetime',
        shard_validators_lifetime: 'Shard validators lifetime',
        shard_validators_num: 'Shard validators number',
        suspended_until: 'Suspended until',
        bridge_addr: 'Bridge address',
        oracle_multisig_address: 'Oracle multisig address',
        external_chain_address: 'External chain address',
        prices: 'Prices',
        state_flags: 'State flags',
        bridge_burn_fee: 'Bridge burn fee',
        bridge_mint_fee: 'Bridge mint fee',
        wallet_min_tons_for_storage: 'Min. ICE for storage in wallet',
        wallet_gas_consumption: 'Wallet gas consumption',
        minter_min_tons_for_storage: 'Minter min. ICE for storage',
        discover_gas_consumption: 'Discover gas consumption',
        param_0: {
            title: 'Config address',
            description: "This parameter is the address of a special smart contract that stores the blockchain's configuration.",
        },
        param_1: {
            title: 'Elector address',
            description: 'This parameter is the address of the Elector smart contract, responsible for appointing validators, distributing rewards, and voting on changes to blockchain parameters.',
        },
        param_2: {
            title: 'System address',
            description: 'This parameter represents the address of the System, on behalf of which new TONs are minted and sent as rewards for validating the blockchain.',
        },
        param_3: {
            title: 'Fee Collector',
            description: 'This parameter is the address of the transaction fee collector. If the parameter is not set - transaction fees are sent to the Elector smart contract.',
        },
        param_4: {
            title: 'Root DNS Contract',
            description: 'This parameter is the address of the root DNS contract of the ICE network.',
        },
        param_5: {
            title: 'Blackhole address',
            description: 'All TONs sent to this address will be eliminated.',
        },
        param_6: {
            title: 'New currencies',
            description: 'This parameter is responsible for minting fees of new currencies. Currently, minting additional currency is not implemented and does not work.',
        },
        param_7: {
            title: 'Currencies volume',
            description: 'This parameter stores the volume of each of the additional currencies in circulation.',
        },
        param_8: {
            title: 'Network version',
            description: 'This parameter indicates the network version and additional capabilities supported by the validators.',
        },
        param_9: {
            title: 'Mandatory parameters',
            description: 'This parameter contains a list (binary tree) of mandatory parameters that cannot be removed by a proposal to change the configuration until parameter 9 changes.',
        },
        param_10: {
            title: 'Critical parameters',
            description: 'This parameter represents a list (binary tree) of critical ICE parameters, the change of which significantly affects the network, so more voting rounds are held.',
        },
        param_11: {
            title: 'Proposal conditions',
            description: 'This parameter indicates under what conditions proposals to change the ICE configuration are accepted.',
        },
        param_12: {
            title: 'Workchain configuration',
            description: 'This parameter represents the configuration of a workchain in the ICE Blockchain. Workchains are designed as independent blockchains that can operate in parallel, allowing ICE to scale and process a very large number of transactions and smart contracts.',
        },
        param_13: {
            title: 'Complaints fee',
            description: 'This parameter defines the cost of filing complaints about incorrect operation of validators in the Elector contract.',
        },
        param_14: {
            title: 'Block reward',
            description: 'This parameter represents the reward for block creation in the ICE Blockchain.',
        },
        param_15: {
            title: 'Election data',
            description: "This parameter contains the duration of different stages of elections and validators' work in the ICE Blockchain.",
        },
        param_16: {
            title: 'Validators count',
            description: 'This parameter represents the limits on the number of validators in the ICE Blockchain. ',
        },
        param_17: {
            title: 'Staking parameters',
            description: 'This parameter represents the stake parameters configuration in the ICE Blockchain. In many blockchain systems, especially those using the Proof-of-Stake or Delegated Proof-of-Stake consensus algorithm, cryptocurrency owners native to the network can "stake" their tokens to become validators and earn rewards.',
        },
        param_18: {
            title: 'Storage price',
            description: 'This parameter represents the configuration for determining the prices for data storage on the ICE Blockchain. This serves as a measure to prevent spam and encourages network maintenance.',
        },
        param_20: {
            title: 'Gas params',
            description: 'This parameter defines the cost of computations in the ICE network. The complexity of any computation is estimated in gas units.',
        },
        param_21: {
            title: 'Masterchain gas params',
            description: 'This parameter defines the cost of computations in the ICE network. The complexity of any computation is estimated in gas units.',
        },
        param_22: {
            title: 'Masterchain block limits',
            description: 'This parameter sets limits on the block, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block.',
        },
        param_23: {
            title: 'Workchain block limits',
            description: 'This parameter sets limits on the block, upon reaching which the block is finalized and the callback of the remaining messages (if any) is carried over to the next block.',
        },
        param_24: {
            title: 'Masterchain message cost',
            description: 'Represents the configuration for the cost of sending messages in the masterchain of the ICE Blockchain.',
        },
        param_25: {
            title: 'Workchain message cost',
            description: 'Represents the configuration for the cost of sending messages in all other cases.',
        },
        param_28: {
            title: 'Catchain configuration',
            description: 'This parameter provides the configuration for the Catchain protocol in the ICE Blockchain. ',
        },
        param_29: {
            title: 'Consensus configuration',
            description: 'This parameter provides the configuration for the consensus protocol above catchain (Param 28) in the ICE Blockchain.',
        },
        param_31: {
            title: 'Preferential addresses',
            description: 'This parameter represents the configuration of smart contract addresses from which no fees are charged for either gas or storage, and where tick-tok transactions can be created. The list usually includes governance contracts.',
        },
        param_32: {
            title: 'Previous round validators',
            description: 'Lists of validators from the previous round.',
        },
        param_34: {
            title: 'Current round validators',
            description: 'Lists of validators from the current round.',
        },
        param_36: {
            title: 'Next round validators',
            description: 'Lists of validators for the next round. Set from the end of the elections until the start of the round.',
        },
        param_40: {
            title: 'Validators fine',
            description: 'This parameter defines the structure of the configuration for punishment for improper behavior (non-validation). In the absence of the parameter, the default fine size is 101 ICE.',
        },
        param_43: {
            title: 'Size limits',
            description: 'This parameter pertains to various size limits and other characteristics of accounts and messages.',
        },
        param_44: {
            title: 'Suspended addresses',
            description: 'This parameter defines the list of suspended addresses, which cannot be initialized until suspended_until. It only applies to yet uninitiated accounts. ',
        },
        param_71: {
            title: 'ETH Toncoin Bridge',
            description: 'This parameter contains the bridge configuration for wrapping ICE in Ethereum blockchain and back.',
        },
        param_72: {
            title: 'BSC Toncoin Bridge',
            description: 'This parameter contains the bridge configuration for wrapping ICE in Binance Smart Chain and back.',
        },
        param_73: {
            title: 'Polygon Toncoin Bridge',
            description: 'This parameter contains the bridge configuration for wrapping ICE in Polygon blockchain and back.',
        },
        param_79: {
            title: 'ETH Bridge',
            description: 'This parameter pertains to bridges for wrapping tokens from Etherum into tokens on the ICE Blockchain.',
        },
        param_81: {
            title: 'BSC Bridge',
            description: 'This parameter pertains to bridges for wrapping tokens from Binance Smart Chain into tokens on the ICE Blockchain.',
        },
        param_82: {
            title: 'Polygon Bridge',
            description: 'This parameter pertains to bridges for wrapping tokens from Polygon into tokens on the ICE Blockchain.',
        },
    },

    error: {
        invalid_address: 'This doesn\'t look like a valid address. Where\'d you get that?',
        invalid_tx: 'This doesn\'t look like a valid transaction address. Where\'d you get that?',
    },

    apps: {
        title: 'Apps',
        error_category: 'Category not found',
        go_catalog: 'Go to catalog',
        banner: {
            title: 'Apps and Services<br>of The Open Network',
            submit_app: 'Submit app',
            learn_more: 'Learn more',
            link: 'https://t.me/catchain',
        },
        categories: {
            all: 'All',
            all_apps: 'All apps',
            wallets: 'Wallets',
            exchanges: 'Exchanges',
            marketplaces: 'Marketplaces',
            games: 'Games',
            staking: 'Staking',
            social: 'Social',
            tools: 'Tools',
            other: 'Other',
            dexs: 'DEXs',
        },
        app: {
            open_app: 'Open app',
            category: 'Category',
            website: 'Website',
            blockchain_address: 'Blockchain address',
            similar_products: 'Similar products',
            nothing_found: 'Nothing was found',
            show_more: 'Show more',
            error_app: 'Application not found',
        },
        filters: {
            popular: 'Popular',
            top: 'Top',
            newest: 'New',
        },
        search: 'Search apps and services',
        app_card: {
            hot: 'Hot',
            new: 'New',
        },
    },
};
