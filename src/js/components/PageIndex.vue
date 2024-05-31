<template>
    <section class="indexpage-container">
        <svg v-on:click="$bus.$emit('app:open-settings-modal')" class="indexpage-settings-button" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>

        <ui-search focus-on-load show-search-button class="indexpage-search" v-bind:placeholder="$t('indexpage.search_placeholder')"/>
    </section>
</template>

<script>
import UiSearch from '~/components/UiSearch.vue';

export default {
    metaInfo() {
        return {
            title: this.$t('indexpage.meta.title'),
            meta: [{
                property: 'description',
                content: this.$t('indexpage.meta.description'),
            }],
        };
    },

    components: { UiSearch },
};
</script>

<style lang="scss">
.indexpage-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 16px;
    box-sizing: border-box;
    position: relative;
}
.indexpage-settings-button {
    position: absolute;
    top: 18px;
    right: 8px;
    opacity: .8;
    cursor: pointer;
    stroke: #797979;
    width: 18px;
    height: 18px;
    &:hover {
        opacity: 1;
    }
}
.indexpage-logo {
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto 24px;
}

@media screen and (max-width: 480px) {
    .indexpage-container {
        padding: 16px 8px;
    }
}

.indexpage-search {
    max-width: 600px;
    font-size: 16px;
    .search-input {
        border-radius: 12px;
        border: 2px solid var(--card-border-color);
        box-shadow: 0 0.5rem 1.2rem var(--card-box-shadow-color);
        background: var(--indexpage-search-background-color);
        &__input {
            padding: 12px 24px;
            background: transparent;
        }
    }
    .search-results {
        padding-bottom: 8px;
        &__link {
            margin: 4px 4px -4px 6px;
            border-radius: 8px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .search-result {
        &__left {
            margin-left: -4px;
        }
    }
}

@media screen and (max-width: 480px) {
    .indexpage-search {
        .search-input__input {
            padding-left: 18px;
            padding-right: 18px;
        }
        .search-results {
            &__link {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
}
</style>
