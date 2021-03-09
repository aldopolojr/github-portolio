<template>
    <base-container>
        <base-overview :data="data"></base-overview>
    </base-container>
</template>

<script>
export default {
    data() {
        return {
            data: {
                paragraph: 'para',
                works: [
                    { title: 'title', date: 'date', tags: ['test', 'test2']},
                ],
            },
        };
    },
}
</script>