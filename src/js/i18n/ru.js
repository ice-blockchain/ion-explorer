export default {
    header: {
        search_placeholder: 'Поиск по адресу или домену',
        search_domain_error: 'Домен не существует либо к нему не привязан адрес кошелька',
        search_address_error: 'Введите адрес ICE или домен в зоне .ton',
    },

    indexpage: {
        meta: {
            title: 'ION Explorer — универсальный обозреватель для блокчейна ICE',
            description: 'Вся информация по блокчейну ICE в доступном и удобном виде на платформе ION Explorer. Ищите транзакции, адреса, пулы, номинаторов и многое другое.',
        },
        search_placeholder: 'Поиск адресов ICE, доменов и транзакций...',
        search_domain_error: 'Домен не существует либо к нему не привязан адрес кошелька',
        search_address_error: 'Введите адрес ICE или домен в зоне .ton',
    },

    search: {
        category: {
            wallet: 'Кошелёк',
            nft: 'Коллекция NFT',
            pool: 'Номинатор-пул',
        },
    },

    settings: {
        title: 'Настройки',
        language: {
            title: 'Язык',
        },
        theme: {
            title: 'Интерфейс',
            light: 'Светлый',
            dark: 'Тёмный',
            auto: 'Авто',
        },
    },

    address: {
        meta: {
            title: 'Адрес {address} в ICE · ION Explorer',
            description: 'Подробная информация об адресе {address}: баланс, транзакции и другая информация. Отслеживайте данные в режиме реального времени.',
        },

        info: {
            address: 'Адрес',
            copy_success: 'Адрес скопирован',
            balance: 'Баланс',
            last_activity: 'Активность',
            state: 'Состояние',
            type_frozen: 'Заморожен',
            type_active: 'Активный',
            type_inactive: 'Неактивный',
            type_suspended: 'Приостановлен',
            contract_type: 'Контракт',
            no_activity: 'Не было транзакций',
        },

        contract_type: {
            wallet: 'Кошелёк',
            nft_collection: 'NFT-коллекция',
            nft_item: 'NFT-итем',
            jetton: 'Жетон',
            jetton_wallet: 'Баланс жетонов',
            nominator_pool: 'Номинатор-пул',
            nominator_pool_single: 'Single Nominator Pool',
            locker: 'Локер',
            vesting_wallet: 'Вестинг кошелёк',
            unknown: 'Неизвестен',
            domain_name: 'Домен',
            dns_domain: 'Домен .ton',
            nft_sale: 'Продажа NFT',
            nft_offer: 'NFT-оффер',
            subscription: 'Подписка',
            telegram_username: 'Юзернейм в Telegram',
            telegram_number: 'Анонимный номер',
            other: 'Прочее',
            sale: {
                sale_info: '{0} за {1}',
                on_auction: 'на аукционе',
                on_sale: 'продаётся',
            },
            storage_provider: {
                name: 'Хранилище',
                rate_template: 'Цена в {period}:',
                rate_value_hour: 'час',
                rate_value_day: 'день',
                rate_value_month: 'месяц',
                rate_value_year: 'год',
                bytes_template: 'за {value}',
                bytes_value_mb: 'МиБ',
                bytes_value_gb: 'ГиБ',
                bytes_value_tb: 'ТиБ',
            },
            subscription_modal_header: 'Контракт подписки',
            nft_sale_modal_header: 'Контракт продажи NFT',
        },

        tab_nfts: 'NFT',
        tab_transactions: 'Транзакции',
        tab_contract: 'Контракт',
        tab_tokens: 'Жетоны',

        tx_table: {
            empty: 'История транзакций пуста',
            age: 'Дата',
            from: 'Отправитель',
            to: 'Получатель',
            value: 'Сумма',
            input: 'ВХД',
            output: 'ИСХ',
            log: 'ЛОГ',
            nowhere: 'Вникуда',
            external: 'извне',
            address_count: 'пусто | {n} адрес | {n} адреса | {n} адресов',
        },

        all_tx_table: {
            sender: 'Отправитель',
            recipient: 'Получатель',
            title: 'Последние транзакции',
            to: 'НА'
        },

        nfts: {
            no_nfts: 'Кажется, на этом адресе нет NFT',
            no_collection: 'Не в коллекции',
        },

        tokens: {
            no_tokens: 'На этом адресе нет жетонов',
            table_token_name: 'Жетон',
            table_token_balance: 'Баланс',
            table_token_jetton_wallet: 'Жетон-кошелёк',
            show_empty_tokens: 'Показать {0} пустых кошельков'
        },

        contract: {
            admonition: {
                verified_title: 'Верифицированные исходники',
                verified_text: 'Результат компиляции данных исходных файлов совпадает с байт-кодом контракта в блокчейне. Проверка была выполнена с помощью специального {verifier}.',
                unverified_title: 'Неизвестный контракт',
                unverified_text: 'У нас нет исходных кодов этого контракта. Загрузить их можно с помощью специального {verifier}.',
                verifier_link_text: 'верификатора',
                inactive_title: 'Неактивный адрес',
                inactive_text: 'В блокчейне нет никаких данных, связанных с этим адресом — либо им никогда не пользовались, либо контракт был по каким-то причинам удалён. В данный момент он просто бесцельно существует в цифровом небытии.',
            },

            tab_raw_source: 'Байт-код',
            tab_raw_data: 'Исходные данные',

            info: 'Информация',
            code: 'Исходный код',
            data: 'Данные',
            source_hex: 'hex',
            source_tvm: 'disassembled',
            source_base64: 'base64',
            source_cells: 'cells',
            info_description: 'На этом адресе лежит смарт-контракт {type}.',
            info_source: 'Его исходный код {link}.',
            source_code: 'доступен на GitHub',
            types: {
                wallet: 'кошелька',
                lockup_wallet: 'защищённого кошелька',
                nft_collection: 'коллекции NFT',
                nft_item: 'NFT-итема',
                elector: 'электора валидаторов',
            },
        },
    },

    tx: {
        meta: {
            title: 'Эксплорер ICE :: Транзакция {hash}',
        },
        title: 'Информация о транзакции',
        account: 'Аккаунт',
        status: 'Статус',
        status_success: 'ОК',
        status_failed: 'Ошибка',
        exit_codes: 'Коды выхода',
        compute_phase: 'фаза compute',
        action_phase: 'фаза action',
        phase_aborted: 'отменено',
        error_icon_tooltip: 'Код ошибки: {0}',
        exit_code_success: 'Успешно',
        exit_code_error: 'Ошибка, код выхода {0}',
        timestamp: 'Время',
        workchain: 'Воркчейн',
        seqno: 'Номер',
        shard: 'Шард',
        fee: 'Комиссия',
        message: 'Комментарий',
        encrypted: 'Зашифровано',
        encrypted_message: 'Зашифрованный комментарий',
        hash: 'Хэш',
        lt: 'LT',
        msgs: 'Сообщения',
        msgs_empty: 'Нет сообщений',
        msgs_count: '{0} входящих, {1} исходящих',
        hash_copy_success: 'Хэш скопирован',
        lt_copy_success: 'LT скопирован',
    },

    block: {
        nav: {
            prev: 'Предыдущий блок',
            next: 'Следующий блок',
            latest: 'Последний блок',
        },
        masterchain_block_title: 'Блок мастерчейна',
        shardchain_block_title: 'Блок шардчейна',
        shardchain_blocks_title: 'Блоки шардчейна',
        transactions_title: 'Транзакции',
        show_details: 'Показать {0} унылых деталей',
    },

    blocks: {
        last_masterchain_blocks_title: 'Последние блоки мастерчейна',
        last_workchain_blocks_title: 'Последние блоки воркчейна',
        block_time: 'Создание блока',
        tx_per_second: "Транзакций в секунду",
        transactions: 'Транзакции',
        block: 'Блок',
        workchain: 'Воркчейн',
        hash: 'Хэш'
    },

    nft: {
        collection: {
            meta: {
                title: 'NFT-коллекция {name} :: ICE Explorer',
                description: 'Просмотр {count} NFT-итемов из коллекции {name} в эксплорере ICE.',
            },
            item_count: 'Пусто | {n} штука | {n} штуки | {n} штук',
            empty_collection_header: 'Пустая коллекция',
            empty_collection_text: 'Кажется, в этой коллекции пока нет NFT. Попробуйте обновить страницу или посмотреть {0}.',
            empty_collection_text_account_link: 'информацию об адресе',
            nonseq_collection_header: 'Особая коллекция',
            nonseq_collection_text: 'Мы старались изо всех сил, но так и не смогли отобразить эту коллекцию. Попробуйте зайти на эту страницу позже или посмотреть {0}.',
            nonseq_collection_text_account_link: 'информацию об адресе',
        },
        item: {
            meta: {
                title: 'NFT-итем {name} (номер {index}) :: Эксплорер ICE',
                title_standalone: 'NFT-итем {name} :: Эксплорер ICE',
            },
            collection: 'Коллекция',
            no_collection: 'Без коллекции',
            owner: 'Владелец',
            number: 'Номер',
            metadata_source: 'Хранится в',
            metadata_source_onchain: 'Блокчейне',
            metadata_source_offchain: 'Интернете',
            metadata_view_source: 'открыть',
            attributes: 'Атрибуты',
            no_attributes: 'Отсутствуют',
            recent_tx: 'Недавние транзакции',
            preview: {
                index: 'Номер {index} из {total}',
                error_text: 'Ошибка загрузки NFT',
                error_button: 'Повторить',
            },
        },
        error: {
            redirect_invalid: 'Этот адрес не является NFT',
        },
    },

    jetton: {
        admin_address: 'Владелец',
        admin_address_empty: 'Отсутствует',
        admin_address_empty_explanation: '(владелец отозвал свои права)',
        supply: 'Объём',
        mutable: 'Изменяемый',
        tokens: 'Жетонов',
        metadata_source: 'Хранится в',
        search_wallet: 'Поиск',
        search_wallet_placeholder: 'Вставьте свой адрес',
        recent_tx: 'Недавние транзакции',
        top_holders: 'Топ холдеров',
        wallet: {
            title: 'Баланс жетонов',
            owner: 'Владелец',
            jetton: 'Жетон',
        },
        error: {
            redirect_invalid: 'Этот адрес не является жетоном',
        },
    },

    nominator_pool: {
        title: 'Номинатор-пул',
        title_help_link: 'https://tonblockchain.ru/p/063aba1f-a01d-4661-9c61-390b3c1dd8c2',
        button_loading: 'Загрузка...',
        button_disabled: 'Нет свободных слотов',
        button_add_stake: 'Вложить ICE',
        button_send_ton: 'Отправить ICE',
        help_text_disabled: 'невозможно добавить стейк: нет свободных слотов',
        help_text_add_stake: 'отправьте не менее <b>{0} ICE</b> с текстом &laquo;<b>d</b>&raquo; в комментарии',
        validator: 'Валидатор',
        nominator_count: 'Номинаторы',
        nominator_count_value: '{count} из {total}',
        stake: 'Стейк',
        stake_validator: 'Валидатор',
        stake_nominators: 'Номинаторы',
        stake_total: 'Всего',
        start_date: 'Дата начала',
        reward_share: 'Доля наград',
        reward_share_validator: 'Валидатор',
        reward_share_nominators: 'Номинаторы',
        min_stake: 'Мин. стейк',
        min_stake_validator: 'Валидатор',
        min_stake_nominator: 'Номинатор',
        tab_transactions: 'Транзакции',
        tab_nominators: 'Номинаторы',
        nominator_table_empty: 'Нет номинаторов',
        nominator_table_stake: 'Стейк',
        nominator_table_pie: 'Доля',
        nominator_table_pending: 'В ожидании',
        nominator_table_withdrawal: 'В отзыве',
        tab_votings: 'Голосования',
        voting_table_empty: 'В данный момент нет голосований',
        voting_table_proposal_hash: 'Хэш предложения',
        voting_table_created_at: 'Создано',
        votes: {
            cast_vote: 'Проголосовать',
            vote_list: 'Голоса',
            disclaimer: 'Учитываются голоса только валидатора и номинаторов.',
            vote_list_empty: 'Ещё никто не проголосовал',
            votes_table_supported: 'Голос',
            votes_table_date: 'Дата',
        },
        votes_bar: {
            title: 'Результаты голосования',
            in_favor: 'За',
            against: 'Против',
            abstained: 'Воздержались',
        },
        error: {
            redirect_invalid: 'Этот адрес не является номинатор-пулом',
        },
    },

    single_nominator: {
        pool: 'Single nominator pool',
        owner: 'Владелец',
        title_help_link: 'https://github.com/orbs-network/single-nominator',
        error: {
            redirect_invalid: 'Смарт контракт данного адреса не single nominator',
        },
    },

    vesting: {
        vesting: 'Вестинг',
        address: 'Вестинг адрес',
        owner: 'Владелец',
        total: 'Всего',
        available: 'Доступно',
        locked: 'Заблокировано',
        duration: 'Длительность',
        vesting_duration: 'Продолжительность вестинга',
        cliff_period: 'Отсрочка',
        unlock: 'Разблокировка',
        unlock_text: 'Каждые {n} после отсрочки',
        start: 'Начало вестинга',
        link: 'Открыть на vesting.ton.org',
        title_help_link: 'https://tonblockchain.ru/vesting',
        error: {
            redirect_invalid: 'Смарт контракт данного адреса не vesting',
        },
    },

    locker: {
        title: 'The Locker',
        total_deposits: 'Всего вложено',
        total_rewards: 'Общая сумма вознаграждений',
        storage: 'Хранилище',
        deposits_until: 'Приём депозитов до',
        unlock: 'Разблокировка',
        unlock_text: 'Каждые {n} после вестинга',
        title_help_link: 'https://tonblockchain.ru/locker',
        error: {
            redirect_invalid: 'Смарт контракт данного адреса не locker',
        },
    },

    suspended: {
        header: 'Замороженные адреса',
        description: 'Для обеспечения прозрачности и улучшения токеномики Toncoin, 171 кошелёк ранних майнеров был заморожен путём <a href="https://t.me/ruton/153">голосования валидаторов</a> на 4 года — до 21 февраля 2027 года',
        about: 'Этот и {0} ранних майнеров были заморожены по итогам голосования валидаторов',
        about_address_count: '170 других адресов',
    },

    subscription: {
        contract_description_html: 'Это&nbsp;&ndash; контракт <strong>подписки</strong>. Раз в определённое время он отправляет ТОНы на адрес <strong>бенефициара</strong>, в обмен на доступ к какому-либо сервису (например, каналу Telegram).',
        subscriber: 'Подписчик',
        beneficiary: 'Бенефициар',
        price: 'Цена',
        first_payment_date: 'Создан',
        last_payment_date: 'Посл. платёж',
        subscription_id: 'ID подписки',
        period: {
            monthly: 'в месяц',
        },
    },

    nft_sale: {
        contract_description_html: 'Это&nbsp;&ndash; контракт <strong>продажи NFT</strong>. Он передаёт NFT новому владельцу как только тот отправит контракту необходимое количество ТОНов.',
        nft_item: 'NFT-итем',
        price: 'Цена',
        is_active: 'Активный?',
        closed_help_text: '(больше не продаётся)',
        purchase: 'Купить',
        marketplace: 'Маркетплейс',
        seller: 'Продавец',
        fees: 'Комиссия',
        marketplace_fee: 'Маркетплейса',
        royalty: 'Создателя NFT',
    },

    common: {
        address: 'Адрес',
        loading: 'Загрузка...',
        load_more: 'Загрузить ещё',
        show_more: 'Показать ещё',
        no_description: 'Нет описания',
        unknown: 'Неизвестно',
        no_data: 'Нет данных',
        empty: 'пусто',
        what_is_this: 'Что это?',
        yes: 'Да',
        no: 'Нет',
        about: 'Информация',
        total: 'Всего',
        raw_metadata: 'Необработанные метаданные',
        nft_item: 'NFT-итем',
        general: 'Общее',
        time: 'Время',
        day: 'День',
        week: 'Неделя',
        two_weeks: 'Две недели',
        month: 'Месяц',
        year: 'Год',
        y: 'г',
        d: 'д',
        h: 'ч',
        seconds: 'секунд | секунда | секунды | секунд',
    },

    stats: {
        masterchain_height: 'Высота мастерчейна',
        block_time: 'Создание блока: {time}с',
        transactions_count: 'Количество пользовательских транзакций',
        transactions_per_second: 'Транзакции отсутствуют | {n} транзакция в секунду | {n} транзакции в секунду | {n} транзакций в секунду',
        circulation: 'Циркуляция',
        total_supply: 'Общее предложение',
        percent_total_supply: '{total}% от общего объема предложения',
        percent_inflation_rate: 'Годовая инфляция 0.6%',
        validators: 'Валидаторы',
        validators_amount: 'Валидаторов',
        validators_election: 'Следующий раунд {n}',
        market_data: 'Рыночные данные',
        price: 'Цена ICE',
        capitalization: 'Капитализация',
        trading_volume: 'Объём торгов',
        contract_types: 'Типы контрактов',
        total_addresses: 'всего адресов',
        address_count: 'Количество адресов',
        transaction_count: 'Количество транзакций',
        volume: 'Объем',
        user: 'Пользователь',
        service: 'Сервис',
        staking: 'Стейкинг',
        total_staked: 'Общий стейк',
        total_stake: 'Общий стейк',
        frozen_stake: 'Замороженный стейк',
        weight: 'Вес',
        apy: 'Доходность',
        staking_apy: 'Доходность',
        validation_status: 'Статус валидации',
        round_started: 'Начало раунда',
        round_ends: 'Окончание раунда',
        election_id: 'Election ID',
        election: 'Выборы',
        delay: 'Задержка',
        validation: 'Валидация',
        hold: 'Удержание',
        next_round: 'Следующий раунд'
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
        invalid_address: 'Кажется, это некорректный адрес. Откуда вы его взяли?',
        invalid_tx: 'Кажется, вы перешли по некорректной ссылке на транзакцию. Откуда вы её взяли?',
    },

    apps: {
        title: 'Приложения',
        error_category: 'Категория не найдена',
        go_catalog: 'В каталог',
        banner: {
            title: 'Приложения и Сервисы<br>The Open Network',
            submit_app: 'Предложить',
            learn_more: 'Узнать больше',
            link: 'https://t.me/ruton',
        },
        categories: {
            all: 'Все',
            all_apps: 'Все',
            wallets: 'Кошельки',
            exchanges: 'Биржи',
            marketplaces: 'Маркетплейсы',
            games: 'Игры',
            staking: 'Стейкинг',
            social: 'Социальные',
            tools: 'Инструменты',
            other: 'Другое',
            dexs: 'DEX',
        },
        app: {
            open_app: 'Открыть',
            category: 'Категория',
            website: 'Сайт',
            blockchain_address: 'Блокчейн адрес',
            similar_products: 'Похожие приложения',
            nothing_found: 'Ничего не найдено',
            show_more: 'Показать еще',
            error_app: 'Приложение не найдено',
        },
        filters: {
            popular: 'Топ',
            top: 'Топ',
            newest: 'Новые',
        },
        search: 'Искать приложения и сервисы',
        app_card: {
            hot: 'Топ',
            new: 'Новые',
        },
    },
};
