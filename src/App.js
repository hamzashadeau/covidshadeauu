import React from 'react';

import { Cards, CountryPicker, Chart, Table } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import cx from 'classnames';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <h1 className={styles.titre}> بعض النصائح لمواجهة كورونا</h1>
<Grid container spacing={3} justify="center" className={cx(styles.card, styles.recovered)}>
<div className={styles.conseil} >
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-ready-social-3676759384ed44cc394abade6fd6d1eef.jpg?sfvrsn=1706a18f_12' alt="COVID-19" />
    </div><div className={styles.conseil}> 
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-if-you-develop-ar.jpg?sfvrsn=1486258a_11' alt="COVID-19" />
    </div><div className={styles.conseil}>
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-inform-ar.jpg?sfvrsn=f6dbe358_12' alt="COVID-19" />
    </div><div className={styles.conseil}>
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-safe-ar.jpg?sfvrsn=1f6e4aef_12' alt="COVID-19" />
    </div><div className={styles.conseil}>
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-support-ar.jpg?sfvrsn=1856f2a3_14' alt="COVID-19" />
    </div><div className={styles.conseil}>
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-address-stigma-ar.jpg?sfvrsn=4615bfbe_12' alt="COVID-19" />
    </div><div className={styles.conseil}>
    <img className={styles.image} src='https://www.who.int/images/default-source/health-topics/coronavirus/social-media-squares/be-kind-to-address-fear-ar.jpg?sfvrsn=a8e99f14_12' alt="COVID-19" />
</div>
  </Grid>
      </div>
    );
  }
}

export default App;