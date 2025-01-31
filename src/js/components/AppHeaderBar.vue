<template>
    <header class="header"
        v-bind:class="{ 'header--mobile-search-visible': searchVisible }">

        <div class="header__container container">

            <ui-link v-bind:to="{ name: 'index' }" style="flex-grow: 0">
                <img src="@img/banner-new.png" alt="ICE" style="flex-grow: 0; width: 36px; height: 36px;"/>
            </ui-link>

            <div class="header-ear-right">
                <ui-search show-loopa class="header-search"
                    v-bind:focusInputField="searchVisible"
                    v-bind:placeholder="$t('header.search_placeholder')"
                    v-on:collapseMobileSearch="searchVisible = false"/>

                <nav class="header-ear-right__buttons">
                    <icon-loopa class="header-ear-right__button header-ear-right__button--loopa"
                        v-on:click="searchVisible = true"/>

                    <icon-settings class="header-ear-right__button header-ear-right__button--settings"
                        v-on:click="$bus.$emit('app:open-settings-modal')"/>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import IconLoopa from  '@img/icons/material-duotone/search.svg?inline';
import IconSettings from  '@img/icons/material-duotone/more_vert.svg?inline';
import UiSearch from '~/components/UiSearch.vue';

export default {
    data() {
        return {
            searchVisible: false,
        };
    },

    components: {
        IconLoopa, IconSettings, UiSearch,
    },
};
</script>

<style lang="scss">
.header {
    display: flex;
    background: var(--header-background);
    box-shadow: 0 1px 10px var(--header-box-shadow-color);
    padding: 8px 0;
    margin-bottom: 18px;
    height: 55px; // 54 + border
    border-bottom: 1px solid var(--header-border-bottom-color);
    box-sizing: border-box;
    position: relative;
    z-index: 80000;

    &__container {
        flex-grow: 1;
        max-width: 1200px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        width: 46px;
        height: 46px;
        margin: -10px 0;
        position: relative;
        bottom: -1px;
        color: var(--header-logo-color);
        transition: .1s color ease;
        &:hover {
            color: var(--body-text-color);
        }

        .header--mobile-search-visible & {
            display: none;
        }
    }
}

.header-ear-left {
    //
}

.header-ear-right {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    &__buttons {
        display: flex;
        align-items: center;
    }
    &__button {
        cursor: pointer;
        color: #797979;
        padding: 16px 4px 16px 12px;
        margin: -12px -2px;
        fill: currentColor;
        width: 24px;
        height: 24px;
        &:hover {
            color: #444;
        }

        &--loopa {
            display: none;
            z-index: 80010;
        }
        &--settings {
            z-index: 80001;
        }
    }
}

@media screen and (max-width: 1200px) {
    .header__container {
        padding: 0 8px;
    }
}

.header-search {
    position: relative;
    width: auto;
    font-size: 14px;

    .search-input {
        min-width: 340px;
        background: var(--body-light-muted-color);
        color: var(--body-text-color);
        border-radius: 6px;
        border: 2px solid transparent;
        transition: .12s min-width ease,
                    .12s border-color ease;
        &__loopa {
            margin: 0 -8px 0 8px;
            opacity: 0.3;
        }
        &__input {
            padding: 9px 0 9px 16px;
            &::placeholder {
                color: #939394;
            }
            &::-webkit-input-placeholder {
                color: #939394;
            }
        }
        &--expanded {
            min-width: 480px;
        }
        &:focus-within {
            min-width: 480px;
            outline: 0 none;
        }
    }
    .search-input-controls {
        &__loader {
            transform: scale(0.9);
        }
    }

    .search-results {
        padding-bottom: 4px;
        padding-top: 4px;
        overflow: hidden;
        &__link {
            margin: 0 0 0 0;
        }
    }
    .search-result {
        &__left {
            margin-left: -4px;
        }
    }
}

@media screen and (max-width: 480px) {
    .header {
        margin-bottom: 12px;
    }

    .header-search {
        flex-grow: 1;
        .search-input {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            &:focus-within {
                max-width: 100%;
                width: 100%;
                min-width: 0;
            }
        }
    }

    // Small screen: hide search input UNLESS user clicked the loopa button:
    .header-search {
        display: none;

        .header--mobile-search-visible & {
            display: flex !important;
        }
    }

    .header-ear-right {
        // Small screen - hide right ear buttons IF the search field is active:
        &__buttons {
            .header--mobile-search-visible & {
                display: none;
            }
        }

        // Small screen - uncover loopa button:
        &__button {
            &--loopa {
                display: flex;
            }
        }
    }
}
</style>
