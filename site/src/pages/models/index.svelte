<script>
    import { url } from '@sveltech/routify'
    import NavBar from './../_components/navBar.svelte'
</script>

<NavBar/>

<h1>Api Models</h1>

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
            <td>Matrix: 400*400*3 skaliert auf 0-1</td>
        </tr>
        <tr>
            <th>Output</th>
            <td>Vektor: 3 skaliert auf 0-1</td>
        </tr>
    </table>
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
    background: rgb(39, 39, 39);
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
    background: rgb(39, 39, 39);
}

.model-description tr th {
    padding-right: 16px;
}

</style>