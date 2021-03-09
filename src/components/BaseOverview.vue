<template>
    <p class="paragraph">{{ data.paragraph }}</p>
    <ul class="list">
        <li v-for="work in data.works" :key="work.title">
            <a href=""><h2>{{ work.title }}</h2></a>
            <h3>{{ work.date }}</h3>
            <div class="tags">
                <span v-for="tag in work.tags" :key="tag">{{ tag }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style lang="scss" scoped>
.paragraph {
    margin: calcRem(20px) 0;
    color: #353b48;
    line-height: 1.5;
}

.list {
    margin: calcRem(20px) 0;
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

    h2 {
        margin: calcRem(5px) 0;
        color: #00a8ff;
        font-size: calcRem(18px);
        font-weight: 400;
    }

    h3 {
        color: #718093;
        font-size: calcRem(14px);
        font-weight: 400;
    }

    .tags {
        margin: calcRem(10px) 0 0;
        display: flex;
        flex-wrap: wrap;
    }
    span {
        display: inline-block;
        padding: calcRem(8px) calcRem(12px);
        margin: 0 calcRem(5px) calcRem(5px) 0;
        background: #353b48;
        color: #ffffff;
        font-size: calcRem(10px);
        border-radius: 20px;

        &:last-child { margin-right: 0; }
    }
}
</style>