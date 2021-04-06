import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "axios";
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };

    console.log(this.state.categories);
    console.log(this.state.playlists);
    console.log(this.state.newReleases);

    this.newReslse = this.newReslse.bind(this);
    this.featuredplaylists = this.featuredplaylists.bind(this);
    this.categories = this.categories.bind(this);
  }
  newReslse() {
    axios({
      method: "GET",
      url:
        "https://api.spotify.com/v1/browse/new-releases?country=SE&offset=5&limit=10",
      headers: {
        Authorization:
          "Bearer BQBK9asdGEiluqqPxbICaka8oOyaaJZ-MLxXXvI3-eNvi8tpiVbYqqP4bvr3D_Clejpmhqja82gPR2nymD7jk6YA2dMHp13ulE0LWtPpNDaQRhLv1-yrudRhStO9xjZhYknO2h5bmhAXYiZiWbLdXE5U80jY2ne8L_JiqJ0fSlkykctKH6FcTml5oregd7nmGz0oLMAPzObHgoR8PtxNKcvBkOU-q_2X3skueSNsxq_vnVWNrbN5VijiBUz5hNlpjtf_UloS2rI_rqfskachfzYbsOEcsTnoOx-atbzZ"
      }
    })
      .then((res) => this.setState({ newReleases: res.data.albums.items }))
      .catch(function (err) {
        console.log(err);
      });
  }

  featuredplaylists() {
    axios({
      method: "GET",
      url: "https://api.spotify.com/v1/browse/featured-playlists",
      headers: {
        Authorization:
          "Bearer BQBK9asdGEiluqqPxbICaka8oOyaaJZ-MLxXXvI3-eNvi8tpiVbYqqP4bvr3D_Clejpmhqja82gPR2nymD7jk6YA2dMHp13ulE0LWtPpNDaQRhLv1-yrudRhStO9xjZhYknO2h5bmhAXYiZiWbLdXE5U80jY2ne8L_JiqJ0fSlkykctKH6FcTml5oregd7nmGz0oLMAPzObHgoR8PtxNKcvBkOU-q_2X3skueSNsxq_vnVWNrbN5VijiBUz5hNlpjtf_UloS2rI_rqfskachfzYbsOEcsTnoOx-atbzZ"
      }
    })
      .then((res) => this.setState({ playlists: res.data.playlists.items }))
      .catch(function (err) {
        console.log(err);
      });
  }

  categories() {
    axios({
      method: "GET",
      url: "https://api.spotify.com/v1/browse/categories",
      headers: {
        Authorization:
          "Bearer BQBK9asdGEiluqqPxbICaka8oOyaaJZ-MLxXXvI3-eNvi8tpiVbYqqP4bvr3D_Clejpmhqja82gPR2nymD7jk6YA2dMHp13ulE0LWtPpNDaQRhLv1-yrudRhStO9xjZhYknO2h5bmhAXYiZiWbLdXE5U80jY2ne8L_JiqJ0fSlkykctKH6FcTml5oregd7nmGz0oLMAPzObHgoR8PtxNKcvBkOU-q_2X3skueSNsxq_vnVWNrbN5VijiBUz5hNlpjtf_UloS2rI_rqfskachfzYbsOEcsTnoOx-atbzZ"
      }
    })
      .then((res) => this.setState({ categories: res.data.categories.items }))
      .catch(function (err) {
        console.log(err);
      });
  }

  componentDidMount() {
    this.newReslse();
    this.featuredplaylists();
    this.categories();
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
