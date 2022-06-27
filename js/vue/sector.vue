<template>
    <div v-if="sector" ref="card" class="card h-100" @click="openDialog()">
        <div class="card-body" style="text-align: center;">
            <div class="material-symbols-outlined ">
                {{ getIcon(sector.name) }}
            </div>
            <div class="card-title">{{ sector.name }}</div>
            <div v-show="fullscreen">
                <h5> Activities </h5>
                <div v-for="(activity, index) in sector.activities" :key="index">
                    {{ activity.name }}
                </div>
            </div>
        </div>
        <div v-if="fullscreen" class="card-footer" style="text-align: center;">
            <button class="btn btn-primary" @click.stop="closeDialog()">Close</button>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'Sector',
    props: ['sector_obj'],
    data () {
        return {
            sector: this.sector_obj,
            icon_mapping: {
                "Forestry": "forest",
                "Environmental protection and restoration activities": "compost",
                "Manufacturing": "factory",
                "Energy": "energy_savings_leaf",
                "Water supply, sewerage, waste management and remediation": "recycling",
                "Transport": "transportation",
                "Construction and real estate": "apartment",
                "Information and communication": "communication",
                "Professional, scientific and technical activities": "biotech",
                "Financial and insurance activities": "account_balance",
                "Education": "school",
                "Human health and social work activities": "diversity_1",
                "Arts, entertainment and recreation": "interests"
            },
            fullscreen: false
        }
    },
    methods: {
        getIcon: function () {
            if (this.sector) {
                const iconName = this.icon_mapping[this.sector.name]
                return iconName ? iconName : 'not_listed_location'
            }
            return 'not_listed_location'
        },
        openDialog: function () {
            let card = this.$refs.card
            card.classList.add('full-screen')
            card.style.cursor = 'inherit'
            this.fullscreen = true
        },
        closeDialog: function () {
            let card = this.$refs.card
            card.classList.remove('full-screen')
            card.style.cursor = 'pointer'
            this.fullscreen = false
        }
    },
    mounted () {
        console.log(this.sector)
    }
}
</script>

<style scoped>
.material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 100,
    'GRAD' 0,
    'opsz' 48;
    font-size: 4rem;
}

.card {
    transition: box-shadow .3s, color .3s;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: #666;

    /*Animations*/
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease; 
}
.card:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    color: #000;
}

.full-screen {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0.98;
}
</style>