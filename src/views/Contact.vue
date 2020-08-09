<template>
  <div>
    <!-- Breadcrumb Begin -->
    <div class="breadcrumb-option">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__links">
              <router-link to="/">
                <i class="fa fa-home"></i> Home
              </router-link>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb End -->

    <!-- Map Begin -->
    <div class="map">
      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5524090066037!2d-71.10245469994108!3d42.47980730490846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3748250c43a43%3A0xe1b9879a5e9b6657!2sWinter%20Street%20Public%20Parking%20Lot!5e0!3m2!1sen!2sbd!4v1577299251173!5m2!1sen!2sbd"
          height="585"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <!-- Map End -->

    <!-- Contact Section Begin -->
    <section class="contact spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="contact__address">
              <div class="section-title">
                <h2>Contact info</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <ul>
                <li>
                  <i class="fa fa-map-marker"></i>
                  <h5>Address</h5>
                  <p>Los Angeles Gournadi, 1230 Bariasl</p>
                </li>
                <li>
                  <i class="fa fa-phone"></i>
                  <h5>Hotline</h5>
                  <span>1-677-124-44227</span>
                  <span>1-688-356-66889</span>
                </li>
                <li>
                  <i class="fa fa-envelope"></i>
                  <h5>Email</h5>
                  <p>Support@gamail.com</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="contact__form">
              <div class="section-title">
                <h2>Get in touch</h2>
              </div>
              <p>
                Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <form @submit.prevent="submit">
                <div class="input__list row">
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      placeholder="Name"
                      v-model="form.name"
                      :class="{ 'form-group--error': $v.form.name.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.form.name.$error && !$v.form.name.required"
                    >Field is required</div>
                    <div class="error" v-if="!$v.form.name.minLength">
                      Name must have at least
                      <!-- {{ $v.name.$params.minLength.min }} letters. -->
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      placeholder="Email"
                      v-model="form.email"
                      :class="{ 'form-group--error': $v.form.email.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.form.email.$error && !$v.form.email.required"
                    >Field is required</div>
                    <div class="error" v-if="!$v.form.email.email">Enter a valid email</div>
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      placeholder="website"
                      v-model="form.website"
                      :class="{ 'form-group--error': $v.form.website.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.form.website.$error && !$v.form.website.required"
                    >Field is required</div>
                    <div class="error" v-if="!$v.form.website.url">Enter a valid website</div>
                  </div>
                </div>
                <textarea placeholder="Comment"></textarea>
                <button
                  type="submit"
                  class="site-btn"
                  :disabled="submitStatus === 'PENDING'"
                >SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->
    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header border-0">
            <!-- <h5 class="modal-title" id="exampleModalLongTitle">Contact</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Your message sent successfully</div>
          <div class="modal-footer border-0">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
    <button
      id="launch-modal"
      class="d-none"
      type="button"
      data-toggle="modal"
      data-target="#myModal"
    >Launch modal</button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { required, minLength, email, url } from "vuelidate/lib/validators";
import Axios, { AxiosResponse } from "axios";

export default Vue.extend({
  data() {
    return {
      form: {
        name: "",
        email: "",
        website: "",
        comment: ""
      },
      submitStatus: null
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(2)
      },
      email: {
        required,
        email
      },
      website: {
        required,
        url
      }
    }
  },
  methods: {
    submit() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
      } else {
        console.log("submit!");
        Axios.post("https://jsonplaceholder.typicode.com/posts", {
          data: this.form.name
        }).then(Response => console.log(Response));
        const launchModal = window.document.getElementById("launch-modal");
        if (launchModal != null) {
          launchModal.click();
        }

        setTimeout(() => {
          this.$v.form.$reset();
          this.form = {
            name: "",
            email: "",
            website: "",
            comment: ""
          };
        }, 500);
      }
    }
  }
});
</script>
<style lang="scss">
.modal-footer {
  background-image: url(/img/footer-bg.d7723794.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
}
</style>
