<script>
    import { api_key } from './_stores/api.js'
    api_key.useLocalStorage();
</script>

<h1>API Key Login</h1>

<p>Logged in as: { $api_key }</p>
<input bind:value={ $api_key }>


<style>
h1 {
    text-align: center;
    text-decoration: underline;
}
</style>