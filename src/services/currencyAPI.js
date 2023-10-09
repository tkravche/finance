import axios from 'axios';

const baseUrlMonobank = 'https://api.monobank.ua';


export async function getCurrency() {
    try {
      const { data } = await axios(`${baseUrlMonobank}/bank/currency`);
      return data;
    } catch (error) {
      alert(
        `Oops! Something went wrong. You caught the following error: ${error.message}.`
      );
    }
  }