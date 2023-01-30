<template>
    <div>
        <div class="d-flex flex-row justify-content-center">
            <div class="row">
                <div class="col-md">
                    <form>
                        <div class="sign-in">Kayıt Ol</div>
                        <div class="form-group">
                            <label id="words_2" for="exampleInputPassword1">Ad Ve Soyad &nbsp &nbsp &nbsp &nbsp &nbsp
                                &nbsp
                                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                            <input type="Şifre" class="form-control" id="exampleInputPassword1"
                                placeholder="Ad Ve Soyad">
                            <label id="words_1" for="exampleInputEmail1">Cep Telefonu veya E-posta</label>
                            <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Cep Telefonu veya E-posta">
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label id="words_2" for="exampleInputPassword1">Password &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                            <input v-model="userData.password" type="password" class="form-control"
                                id="exampleInputPassword1" placeholder="En Az 6 Karakter">
                            <label id="words_2" for="exampleInputPassword1">Password &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                            <input type="password" class="form-control" id="exampleInputPassword1"
                                placeholder="şifre tekrarı">

                            <div class="form-group">
                                <button  type="button" class="btn btn-warning"
                                    id="signUp">Kayıt Ol</button>
                                <p>Bir hesap oluşturduğunuzda, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
                                    olursunuz. Daha fazla bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi Alanına
                                    Dayalı Tanıtımları inceleyebilirsiniz.</p>

                                <a href="^#">Yardımamı ihtiyacınız var?</a>


                            </div>
                        </div>
                        <div class="form-check">


                        </div>
                        <router-link to="LoginPage"><button type="button" class="btn btn-warning"
                                id="grey-button">Hesabınızmı var?</button></router-link>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

