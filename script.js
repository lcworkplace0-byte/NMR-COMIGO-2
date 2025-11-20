<script>
    function sim(){ 
        alert("VOCÊ É MINHA NAMORADA, PERFEITA! EU TE AMO AMOR ❤️")
    }
    function desvia(){
        var btn = document.querySelector("#btnao") ;
        console.log(btn);
        btn.style.position = 'relative'
        btn.style.bottom = geraPosicao(30,70);
        btn.style.left = geraPosicao(30,70);
        console.log("opa...desviei")
    }
    function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
</script>