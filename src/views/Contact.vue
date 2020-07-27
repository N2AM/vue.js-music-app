<template>
  <div>
    <!-- Breadcrumb Begin -->
    <div class="breadcrumb-option">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb__links">
              <a href="#"> <i class="fa fa-home"></i> Home </a>
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
                      v-model="name"
                      @input="$v.name.$touch()"
                      :class="{ 'form-group--error': $v.name.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.name.$error && !$v.name.required"
                    >
                      Field is required
                    </div>
                    <div class="error" v-if="!$v.name.minLength">
                      Name must have at least
                      {{ $v.name.$params.minLength.min }} letters.
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      placeholder="Email"
                      v-model="email"
                      @input="$v.$touch()"
                      :class="{ 'form-group--error': $v.email.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.email.$error && !$v.email.required"
                    >
                      Field is required
                    </div>
                    <div class="error" v-if="!$v.email.email">
                      Enter a valid email
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      type="text"
                      placeholder="website"
                      v-model="website"
                      @input="$v.$touch()"
                      :class="{ 'form-group--error': $v.website.$error }"
                    />
                    <div
                      class="error"
                      v-if="$v.website.$error && !$v.website.required"
                    >
                      Field is required
                    </div>
                    <div class="error" v-if="!$v.website.url">
                      Enter a valid website
                    </div>
                  </div>
                </div>
                <textarea placeholder="Comment"></textarea>
                <button
                  type="submit"
                  class="site-btn"
                  :disabled="submitStatus === 'PENDING'"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact Section End -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { validationMixin } from "vuelidate";
import { required, minLength, email, url } from "vuelidate/lib/validators";
export default Vue.extend({
  data() {
    return {
      // form: {
      name: "",
      email: "",
      website: "",
      comment: "",
      // },
      submitStatus: null,
    };
  },
  mixins: [validationMixin],
  validations: {
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
    },
  },
  methods: {
    submit(event) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
              console.log('submit!')

        setTimeout(() => {
          event.target.reset()
        }, 500)
      }
    }
  }
  },
});
</script>
