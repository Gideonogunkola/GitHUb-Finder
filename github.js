class GitHub {
  constructor() {
    this.client_id = "27ad8a46ba9488876ba1";
    this.client_secret = "77442c03dfff49dd2752434db3efa79f4b2cc435";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
