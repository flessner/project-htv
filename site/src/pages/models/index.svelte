<script>
    import { url } from '@sveltech/routify'
    import NavBar from './../_components/navBar.svelte'
    import LoginBar from './../_components/loginBar.svelte'
</script>

<NavBar />
<LoginBar />

<h1>API Models</h1>

<h2>V1 - June 2020</h2>
<div class='model-container'>
    <h3>Image - K1006</h3>
    <table class='model-description'>
        <tr>
            <th>Model</th>
            <td>Proprietär</td>
        </tr>
        <tr>
            <th>Input</th>
            <td>base64 PNG/JPEG</td>
        </tr>
        <tr>
            <th>Output</th>
            <td>3 Arten in JSON skaliert auf 0 - 1</td>
        </tr>
    </table>
    <div><a href={$url('/models/v1/k1006')}><b>Test</b></a></div>
</div>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}

h2 {
    width: 200px;
    margin-left: 30px;
    padding: 8px;
    border-radius: 6px;
    text-align: center;
    color: white;
    background: rgb(40, 40, 40);
}

h3{
    padding-top: 6px; 
}

.model-container {
    margin-left: 3%;
    margin-right: 3%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 6px; 
    border-radius: 6px;
    color: white;
    background: rgb(40, 40, 40);
}

.model-container div {
    margin-top: 10px;
    margin-bottom: 4px;
    padding: 3px;
    width: 80px;
    text-align: center;
    border-radius: 2px;
    background: #FFF;
}

.model-container div a {
    color: rgb(40, 40, 40);
}

.model-description tr th {
    padding-right: 16px;
}
</style>