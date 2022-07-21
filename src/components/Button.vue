<template>
  <button class="defaultbtn">{{ text }}</button>
</template>

<script>
export default {
 props: {
    text: {
        type: Array
    }
 }
}
</script>

<style scoped>
    .defaultbtn{
        padding: 14.5px 0px;
        width: 100%;
        max-width: 357px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */
        color: #FFFFFF;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        max-width: 375px;
        background: #2656D1;
        box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
        border-radius: 8px;
        border: none;
    }

    .loginbtn{
        padding: 14.5px 0px;
        width: 100%;
        max-width: 357px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        /* identical to box height, or 27px */
        color: #FFFFFF;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
        max-width: 375px;
        background: #873AB6;
        box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
        border-radius: 8px;
        border: none;
    }


</style>