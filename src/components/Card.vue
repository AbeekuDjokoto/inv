<template>
  <div class="card">
    <h1>{{ text }}</h1>
    <p>{{ numberText }}</p>
  </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String
        },
        numberText: {
            type: String
        }
    }
}
</script>

<style scoped>

.card{
    width: 100%;
    max-width: 244px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 1;
    padding: 16px 0px 16px 32px;
}

h1{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    /* or 19px */
    color: #595F69;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 6px;
}
</style>