<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand href="#">
        Little Brown Book
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/">Shop</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/basket">Basket </router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item>
            <b-button class="btn-green">
              <b-icon icon="gift"></b-icon>&nbsp;
              <b-badge variant="light">0 <span class="sr-only"></span></b-badge>
            </b-button>
          </b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
