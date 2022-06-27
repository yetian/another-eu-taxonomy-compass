<template>
    <div v-if="sector" class="card h-100">
        <div class="card-body" style="text-align: center;">
        <div class="material-symbols-outlined ">
            {{ getIcon(sector.name) }}
        </div>
        <div class="card-title">{{ sector.name }}</div>
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
            }
        }
    },
    methods: {
        getIcon: function () {
            if (this.sector) {
                const iconName = this.icon_mapping[this.sector.name]
                return iconName ? iconName : 'not_listed_location'
            }
            return 'not_listed_location'
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
    color: #666;
}
.card:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
    color: #000;
}
</style>