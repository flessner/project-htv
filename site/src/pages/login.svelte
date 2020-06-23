<script>
    import NavBar from './_components/navBar.svelte'
    import { api_key } from './_store'
    api_key.useLocalStorage();
</script>

<NavBar />

<div class='login-container'>
    <h1>API Key Login</h1>
    <div class='login-display'>
        {#if $api_key != ''}
            <p><b>Logged in as:</b> { $api_key }</p>
        {/if}
        {#if $api_key == ''}
            <p><b>You are not logged in!</b></p>
        {/if}
    </div>

    <div class='key-input'>
        <p><b>API Key:</b></p>
        <input bind:value={ $api_key }>
        <button on:click="{() => $api_key = ''}">Log Out</button>
    </div>
</div>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}

.login-container {
    margin: 0% 10%;
    padding: 0% 5%;
    width: 70%;
}

.login-display {
    padding: 1px;
    margin: 3% 0%;
    background: rgb(40, 40, 40);
    text-align: center;
    border-radius: 8px;
    color: #FFF;
}

.key-input {
    width: 100%;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    display: flex;
}

.key-input input {
    width: 600px;
}
</style>