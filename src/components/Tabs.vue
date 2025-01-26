<template>
    <div class="tab-buttons">
        <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)">
            {{ tab.label }}
        </button>
    </div>
    <div class="tabs-content">
        <component :is="currentTabComponent"></component>
    </div>
</template>

<script>
// import TransactionList from './components/TransactionList.vue';
// import AddTransaction from './components/AddTransaction.vue';
export default {
    name: 'Tab',
    components: {
        TransactionList,
        AddTransaction
    },
    data() {
        return {
            tabs: [
                { label: 'History', component: TransactionList },
                { label: 'AddTransaction', component: AddTransaction },
            ],
            activeTabIndex: 0,
        };
    },
    computed: {
        currentTabComponent() {
            return this.tabs[this.activeTabIndex].component;
        }
    },
    methods: {
        changeTab(index) {
            this.activeTabIndex = index;
        },
    },
}
</script>

<style scoped></style>