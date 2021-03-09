<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.container {
    margin: 0 calcRem(25px);

    @include desktop {
        margin: 0 auto;
        max-width: 974px;
        text-align: auto;
    }
}
</style>