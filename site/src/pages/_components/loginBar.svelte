<script>
    import { url } from '@sveltech/routify'
    import { api_key } from './../_store'
    
    api_key.useLocalStorage();
</script>

<div class='footer-login'>
    {#if $api_key != ''}
        <p>Logged in as: { $api_key }</p>
        <a href={$url('/login')}><i>Change Key</i></a>
    {:else if $api_key == ''}
        <p>You are currently not logged in!</p>
        <a href={$url('/login')}><i>Log In</i></a>
    {/if}
</div>

<style>
.footer-login {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    display: flex;
    color: #FFF;
    background-color: rgb(40, 40, 40)
}

.footer-login a {
    color: #FFF;
}
</style>
