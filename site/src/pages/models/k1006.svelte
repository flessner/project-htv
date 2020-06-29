<script>
    import NavBar from './../_components/navBar.svelte'
    import LoginBar from './../_components/loginBar.svelte'
    import { api_key } from './../_store'
    api_key.useLocalStorage();

    const apiURL = "https://2bopuyx1zh.execute-api.eu-west-1.amazonaws.com/prod/img/k1006";
    let files;
    let image_queue = [];
    let api_results = [];
    let timed_out_results = 0;

    function setFiles() {
        image_queue = [];
        api_results = [];
        console.log('Triggered Queue update, files are:')

        async function sendApiRequest(data) {
            let id = data[0];
            let base64 = data[1];
            console.log('Sending: ' + id);

            fetch(apiURL, {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-api-key': $api_key
                },

                body: JSON.stringify({
                    "id": id, 
                    "data": {
                        "image": base64
                    }
                })
            })
            .then(response => { 
                response.json().then((body) => {
                    console.log(body.data);
                    api_results.push(body);
                    try {
                        addResult(body, response.status);
                    } catch(e) {
                        if (timed_out_results < 3) {
                            addResult(undefined, 403);
                            timed_out_results = 0;
                        } else {
                            addResult(undefined, 502);
                        }
                    }
                })
            });
        }

        async function readAndPreview(file) {
            var reader = new FileReader();
            reader.addEventListener("load", function () {
                image_queue.push([file.name, this.result]);
                sendApiRequest([file.name, this.result])
            }, false);
            reader.readAsDataURL(file);
            }

        if (files) {
            [].forEach.call(files, readAndPreview);
        }
        console.log(image_queue);
    }

    function clearResults() {
        image_queue = [];
        api_results = [];
        timed_out_results = 0;
        document.getElementById("predictions").innerHTML = '<th style="width: 200px;">NAME</th><th style="width: 200px;">EISEN NICKEL</th><th style="width: 200px;">KUPFER</th><th style="width: 200px;">NACHVERZINNT</th>';
        console.log('Results cleared')
    }

    function addResult(body, code) {
        if (body) {
            let eisen_nickel = body.data['sk-eisen-nickel'];
            let kupfer = body.data['sk-kupfer'];
            let nachverzinnt = body.data['nachverzinnt'];

            if (eisen_nickel == 1) {eisen_nickel = 'X'} else {eisen_nickel = eisen_nickel.toFixed(2)}
            if (kupfer == 1) {kupfer = 'X'}       else {kupfer = kupfer.toFixed(2)}
            if (nachverzinnt == 1) {nachverzinnt = 'X'} else {nachverzinnt = nachverzinnt.toFixed(2)}
            let name = body.id; 

            document.getElementById("predictions").innerHTML += '<tr><th>' + name + '</th><td style="text-align: center;">' + eisen_nickel + '</td><td style="text-align: center;">' + kupfer + '</td><td style="text-align: center;">' + nachverzinnt + '</td><tr>';
            timed_out_results += 1;
        } else {
            if (code == 403) {
                document.getElementById("predictions").innerHTML += '<tr><th>' + code + '</th><td style="text-align: center;">' + 'ERROR' + '</td><th style="text-align: center;">' + 'UNAUTHORIZED' + '</th><td style="text-align: center;">' + 'ERROR' + '</td><tr>';
            } else if (code == 502) {
                document.getElementById("predictions").innerHTML += '<tr><th>' + code + '</th><td style="text-align: center;">' + 'ERROR' + '</td><th style="text-align: center;">' + 'BAD GATEWAY' + '</th><td style="text-align: center;">' + 'ERROR' + '</td><tr>';
            } else {
                document.getElementById("predictions").innerHTML += '<tr><th>' + code + '</th><td style="text-align: center;">' + 'ERROR' + '</td><td style="text-align: center;">' + 'ERROR' + '</td><td style="text-align: center;">' + 'ERROR' + '</td><tr>';
            }
        }
    }
</script>

<NavBar />
<LoginBar />

<h1>K1006</h1>
<div class='file-actions'>
    <input  type='file' accept="image/jpeg, image/png" bind:files on:change={setFiles} multiple>
    <button on:click={clearResults}><b>Clear</b></button>
</div>
<table id='predictions'>
    <th>NAME</th>
    <th>EISEN NICKEL</th>
    <th>KUPFER</th>
    <th>NACHVERZINNT</th>
</table>

<style>
h1 {
    text-align: center;
    text-decoration: underline;
}

.file-actions {
    justify-content: space-around;
    align-items: center;
    display: flex;
}

.file-actions button {
    padding: 8px;
    width: 120px;
    text-align: center;
    border-radius: 5px;
    color: #FFF;
    background: rgb(141, 2, 31);
}

#predictions {
    margin-top: 30px;
    margin-left:auto; 
    margin-right:auto;
}

#predictions th {
    width: 200px;
}
</style>
