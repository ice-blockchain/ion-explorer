import Vue from 'vue';
import VueRouter from 'vue-router';
import PageAddressInvalid from '~/components/address/PageAddressInvalid.vue';
import PageAddress from '~/components/address/PageAddress.vue';
import PageBlock from '~/components/block/PageBlock.vue';
import PageBlockLatest from '~/components/block/PageBlockLatest.vue';
import PageBlocks from '~/components/block/PageBlocks.vue';
import PageIndex from '~/components/PageIndex.vue';
import PageTx from '~/components/tx/PageTx.vue';
import PageNft from '~/components/nft/PageNft.vue';
import PageJetton from '~/components/jetton/PageJetton.vue';
import PagePool from '~/components/pool/Pool.vue';
import PageStats from '~/components/stats/PageStats.vue';
import PageVesting from '~/components/pool/PageVesting.vue';
import PageSingleNominator from '~/components/pool/PageSingleNominator.vue';
import PageLocker from '~/components/address/PageLocker.vue';
import PageValidators from '~/components/validators/PageValidators.vue';
import PageSuspended from '~/components/address/PageSuspended.vue';
import PageConfig from '~/components/config/PageConfig.vue';
import PageApps from '~/components/apps/PageApps.vue';
import AppWrapper from '~/components/apps/App/AppWrapper.vue';
import { ADDRESS_REGEX, APP_MAIN_LOCALE } from '~/config.js';

Vue.use(VueRouter);

const router = new VueRouter({
    hashbang: false,
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [{
        path: '/:lang(ru|en)?',
        component: {
            render: (h) => h('router-view'),
        },
        children: [{
            name: 'index',
            path: '/',
            component: PageBlocks,
        }, {
            name: 'address',
            path: `address/:address(${ADDRESS_REGEX.source})`,
            component: PageAddress,
            props: true,
        }, {
            name: 'address_invalid',
            path: 'address/:address',
            component: PageAddressInvalid,
            props: true,
        }, {
            // redirect from tonapi format:
            path: `account/:address(${ADDRESS_REGEX.source})`,
            redirect: { name: 'address' },
        }, {
            name: 'tx_by_msg_hash',
            path: 'tx/by-msg-hash/:hash([^:]+)',
            component: PageTx,
            props: true,
        }, {
            // redirect from OKX vsraty format:
            path: 'tx/&lt=:lt([\\d]+)&hash=:hash([^:\$]+)',
            redirect: { name: 'tx' },
        }, {
            // redirect from old transaction format (lt:hash:address):
            path: 'tx/:lt([\\d]+)\::hash([^:]+)\::address(.{48})',
            redirect: { name: 'tx' },
        }, {
            // redirect from ancient transaction format (lt$hash$address):
            path: 'tx/:lt([\\d]+)\$:hash([^:\$]+)\$:address(.{48})',
            redirect: { name: 'tx' },
        }, {
            name: 'tx',
            path: 'tx/:hash([^:\$]{44,})',
            component: PageTx,
            props: true,
        }, {
            name: 'block',
            path: 'block/:workchain([\\-\\d]+)\::shard([\\-\\d]+)\::seqno([\\d]+)',
            component: PageBlock,
            meta: { title: 'ION Explorer :: Block' },
            props: true,
        }, {
            name: 'block_latest',
            path: 'block/latest',
            component: PageBlockLatest,
            meta: { title: 'ION Explorer :: Block' },
        }, {
            name: 'blocks',
            path: 'blocks',
            component: PageBlocks,
            meta: { title: 'ION Explorer :: Blocks' },
        }, {
            name: 'nft',
            path: `nft/:address(${ADDRESS_REGEX.source})`,
            component: PageNft,
            props: true,
        }, {
            name: 'jetton',
            path: `jetton/:address(${ADDRESS_REGEX.source})`,
            component: PageJetton,
            props: true,
            meta: { title: 'ION Explorer :: Jetton' },
        }, {
            path: `nominator/:address(${ADDRESS_REGEX.source})`,
            redirect: { name: 'nominator' },
        }, {
            name: 'nominator',
            path: `pool/:address(${ADDRESS_REGEX.source})`,
            component: PagePool,
            props: true,
            meta: { title: 'ION Explorer :: Nominator Pool' },
        }, {
            name: 'vesting',
            path: `vesting/:address(${ADDRESS_REGEX.source})`,
            component: PageVesting,
            props: true,
            meta: { title: 'ION Explorer :: Vesting' },
        }, {
            name: 'locker',
            path: `locker/:address(${ADDRESS_REGEX.source})`,
            component: PageLocker,
            props: true,
            meta: { title: 'ION Explorer :: Locker' },
        }, {
            name: 'single_nominator',
            path: `single-nominator/:address(${ADDRESS_REGEX.source})`,
            component: PageSingleNominator,
            props: true,
            meta: { title: 'ION Explorer :: Single Nominator Pool' },
        }, /*{
            name: 'suspended',
            path: 'suspended',
            component: PageSuspended,
        }, {
            name: 'stats',
            path: 'stats',
            component: PageStats,
        }, {
            name: 'validators',
            path: 'validators',
            component: PageValidators,
            meta: { title: 'ION Explorer :: Validators list' },
        }, {
            name: 'config',
            path: '/config',
            component: PageConfig,
        }, {
            name: 'apps',
            path: 'apps',
            component: PageApps,
            meta: { title: 'ION Explorer :: Apps' },
            props: true,
        }, {
            name: 'apps-category',
            path: 'apps/:category',
            component: PageApps,
            props: true,
            children: [{
                name: 'app',
                path: ':app',
                component: AppWrapper,
                props: true,
            }],
        }*/],
    }],
});

// TODO: Uncomment this one day
/*
router.beforeEach((to, from, next) => {
    // replace main locale prefix with domain root:
    if (to.params.lang === APP_MAIN_LOCALE) {
        next({
            ...to,
            params: {
                ...to.params,
                lang: undefined,
            },
        });

    } else {
        next();
    }
});
 */

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        if (to.meta?.title) {
            document.title = to.meta.title;
        }
    });
});

export default router;
