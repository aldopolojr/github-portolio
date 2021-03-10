<template>
    <div class="pagination">
        <div class="pagination__group">
            <button @click="decActivePage" v-show="showPrevBtn"><i class="icon icon-arrow-left"></i></button>
        </div>
        <div class="pagination__group">
             <button @click="incActivePage" v-show="showNextBtn"><i class="icon icon-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'pagination'],
    inject: ['incActivePage', 'decActivePage'],
    computed: {
        showPrevBtn() {
            if (this.pagination.activePage === 0) {
                return false;
            } else {
                return true;
            }
        },
        showNextBtn() {
            let x = Math.ceil(this.data.works.length / this.pagination.numbersOfWorks) - 1;

            if (this.pagination.activePage === x) {
                return false;
            } else {
                return true;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 calcRem(50px);
    color: #353b48;

    button {
        background: none;
        font-size: calcRem(20px);
        border: none;
        border-radius: none;
        outline: none;
        cursor: pointer;

        &:hover {
            color: #0097e6;
        }
    }
}
</style>