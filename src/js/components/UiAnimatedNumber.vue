<script>
export default {
    render(h) {
        return h('span', [
            this.formattedValue,
            this.suffix,
        ]);
    },

    props: {
        value: {
            type: Number,
            default: 0,
        },

        suffix: {
            type: String,
            default: undefined,
        },
    },

    data() {
        return {
            intermediateValue: 0,
        };
    },

    computed: {
        formattedValue() {
            return this.intermediateValue.toLocaleString(this.$i18n.locale);
        },
    },

    watch: {
        value(newValue, oldValue) {
            // Do not animate from initial values and single steps:
            if (oldValue === 0 || newValue - oldValue === 1) {
                this.intermediateValue = newValue;

            } else {
                this.animate({ from: oldValue, to: newValue, duration: 500 });
            }
        },
    },

    created() {
        this.intermediateValue = this.value;
    },

    methods: {
        animate({ from, to, duration }) {
            let startTime = null;
            let currentTime = Date.now();

            const step = (currentTime) => {
                if (!startTime) {
                    startTime = currentTime;
                }

                const progress = Math.min((currentTime  - startTime) / duration, 1);

                const computed = progress * (to - from) + from;
                if (0 <= computed && computed < 1) {
                    // In the older implementation, this condition was absent,
                    // causing values less than 1 to be always shown as zero after the first animation.
                    this.intermediateValue = computed;
                } else {
                    this.intermediateValue = Math.floor(computed);
                }

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else{
                    window.cancelAnimationFrame(window.requestAnimationFrame(step));
                }
            };

            window.requestAnimationFrame(step);
        },
    },
};
</script>
