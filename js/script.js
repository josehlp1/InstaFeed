$(function () {

    const token = "USER TOKEN";
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";
    console.log(url);
    $.get(url).then(function (response) {
        //console.log('Retorno: ', response.data)
        let dadosJson = response.data;
        let conteudo = '<div class="row" style="padding-left:5px;">';
        let tamanho_json = Object.keys(dadosJson).length;

        for (let p = 0; p < tamanho_json; p++) {
            let feed = dadosJson[p];
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            console.log(tipo)
            if (tipo == "VIDEO") {
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><video style="with: 100%; height: 90%;" controls><source src="' + feed.media_url + '" type="video/mp4" ></video></div>';
            } else if (tipo == "IMAGE") {
                conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><img src="' + feed.media_url + '" style="with: 100%; height: 90%;" title="' + titulo + '" alt="' + titulo + '"></div>';
            }
        }

        conteudo += "</div>";
        console.log(conteudo)
        $('#insta').html(conteudo);

    })

})