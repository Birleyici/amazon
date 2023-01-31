<template>
  <div>
    <div class="d-flex flex-row justify-content-center">
      <div class="row">
        <div class="col-md">
          <form>
            <div class="sign-in">Giriş Yap</div>
            <div class="form-group">
              <label id="words_1" for="exampleInputEmail1">Email</label>
              <input
                v-model="user.email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email giriniz"
              />
              <small id="emailHelp" class="form-text text-muted"></small>
            </div>
            <div class="form-group">
              <label id="words_2" for="exampleInputPassword1"
                >Password &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Şifrenizimi unuttunuz?
              </label>
              <input
                v-model="user.pass"
                type="Şifre"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Şifre"
              />
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-warning"
                  id="sign-in"
                  @click="singInWithEmail()"
                >
                  Giriş Yap
                </button>
                <p>
                  Oturum açarak, Amazon'un Kullanım ve Satış Koşulları'nı kabul etmiş
                  olursunuz. Kişisel verilerinizin Amazon tarafından nasıl işlendiğine
                  ilişkin detaylı bilgi için Gizlilik Bildirimi, Çerez Bildirimi ve İlgi
                  Alanına Dayalı Tanıtımları inceleyebilirsiniz.
                </p>

                <a href="^#">Yardımamı ihtiyacınız var?</a>
              </div>
            </div>
            <div class="form-check"></div>
            <router-link to="SignUpPage"
              ><button type="button" class="btn btn-warning" id="grey-button">
                Amazon Hesabınızı Oluşturun!
              </button></router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '/stores/user';
const userStore = useUserStore();

const user = ref({
email: '' as string | null,
pass: '' as string | null,
});

function singInWithEmail() {

  userStore.signInWithEmail(user);
}



</script>
