<template>
    <header class="header">
        <base-container>
            <div class="header__content">
                <router-link to="/applications">Applications</router-link>
                <router-link to="/practice">Practice</router-link>
                <router-link to="/training">Learning</router-link>
                <router-link to="/tutorials">Tutorials</router-link>
            </div>
        </base-container>
    </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
    padding: calcRem(20px) 0;
    background: #00a8ff;
    color: #fff;
    font-size: calcRem(12px);
    text-transform: uppercase;

    &__content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    a {
        margin-bottom: calcRem(10px);
        padding: calcRem(10px) calcRem(15px);
        border-radius: 20px;

        &:last-child { margin-bottom: 0; }

        &.router-link-active {
            background: #0097e6;
        }
    }
}

@include phablet {
    .header {
        &__content {
            flex-direction: row;
        }

        a { 
            margin: 0 calcRem(20px) 0 0;

            &:last-child { margin-right: 0; }
        }
    }
}
</style>