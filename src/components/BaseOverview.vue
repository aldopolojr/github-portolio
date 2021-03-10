<template>
    <div class="overview">
        <p class="paragraph">{{ data.paragraph }}</p>
        <ul class="list">
            <li v-for="work in data.works.slice(startingWork, endingWork)" :key="work.title">
                <div class="list__content">
                    <h2>{{ work.title }}</h2>
                    <h3>{{ work.date }}</h3>
                    <div class="list__buttons">
                        <a :href="work.url.git" target="_blank"><i class="icon icon-github"></i></a>
                        <a :href="work.url.demo" target="_blank"><i class="icon icon-link"></i></a>
                    </div>
                </div>
                <div class="list__tags">
                    <span v-for="tag in work.tags" :key="tag.name" :class="tag.type">{{ tag.name }}</span>
                </div>
            </li>
        </ul>
        <base-pagination v-show="showPagination" :data=data :pagination="pagination"></base-pagination>
    </div>
</template>

<script>
import BasePagination from './BasePagination.vue';

export default {
    components: { BasePagination },
    props: ['data'],
    data() {
        return {
            pagination: {
                numbersOfWorks: 5,
                activePage: 0,
            },
        };
    },
    provide() {
        return {
            incActivePage: this.incActivePage,
            decActivePage: this.decActivePage,
        };
    },
    computed: {
        showPagination() {
            return this.data.works.length > this.pagination.numbersOfWorks;
        },
        startingWork() {
            return this.pagination.activePage * this.pagination.numbersOfWorks;
        },
        endingWork() {
            return (this.pagination.activePage * this.pagination.numbersOfWorks) + this.pagination.numbersOfWorks;
        },
    },
    methods: {
        incActivePage() {
            this.pagination.activePage++;
            window.scrollTo(0, 0);
        },
        decActivePage() {
            this.pagination.activePage--;
            window.scrollTo(0, 0);
        },
    },
}
</script>

<style lang="scss" scoped>

.overview {
    padding-bottom: calcRem(50px);
}

.paragraph {
    margin: calcRem(40px) 0;
    color: #353b48;
    line-height: 1.75;
}

.list {
    margin: calcRem(20px) 0 calcRem(50px);
    list-style: none;

    li {
        margin-bottom: calcRem(20px);
        padding-bottom: calcRem(20px);
        border-bottom: 1px solid #718093;

        &:last-child { 
            margin-bottom: 0; 
            padding-bottom: 0;
            border-bottom: none;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 0 0 calcRem(10px);
    }

    h2 {
        display: inline-block;
        margin: 0 0 calcRem(5px) 0;
        color: #00a8ff;
        font-size: calcRem(24px);
        font-weight: 400;
    }

    h3 {
        display: inline-block;
        margin: 0 0 calcRem(10px) 0;
        color: #718093;
        font-size: calcRem(12px);
        font-weight: 400;
    }

    a {
        display: inline-block;
        margin: 0 calcRem(10px) 0 0;
        font-size: calcRem(16px);

        &:hover { color: #0097e6; }
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
    }

    span {
        display: inline-block;
        padding: calcRem(8px) calcRem(12px);
        margin: 0 calcRem(5px) calcRem(10px) 0;
        background: #353b48;
        color: #ffffff;
        font-size: calcRem(10px);
        border-radius: 20px;

        &:last-child { margin-right: 0; }
    }

    .html { background: #EB613A; }
    .css { background: #02A0E5; }
    .js { background: #E8A64E; }
    .vue { background: #41B884; }
    .php { background: #8992C0; }
}

@include phablet {
    .list__content {
        flex-direction: row;

        h2 { margin: 0 calcRem(10px) 0 0; }
        h3 { margin: 0 calcRem(20px) 0 0; }
    }
}
</style>