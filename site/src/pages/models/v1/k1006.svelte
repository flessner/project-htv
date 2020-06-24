<script>
    import NavBar from './../../_components/navBar.svelte'
    import LoginBar from './../../_components/loginBar.svelte'

    let files;
    let image_queue = [];

    function previewFiles() {
        var preview = document.querySelector('#preview');
        preview.innerHTML = '';
        image_queue = [];
        console.log('Triggered Preview update')

        async function readAndPreview(file) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                image_queue.push([file.name, this.result]);
            }, false);
            reader.readAsDataURL(file);
            }

        if (files) {
            [].forEach.call(files, readAndPreview);
        }
        console.log(image_queue)
    }
</script>

<NavBar />
<LoginBar />

<h1>K1006</h1>
<div class=>
    <input  type='file' accept="image/jpeg, image/png" bind:files on:change={previewFiles} multiple>
</div>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}
</style>
