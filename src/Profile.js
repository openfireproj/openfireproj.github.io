let storage = require('local-storage');
let PROFILE = 'profile'
let WINDOWS = 'windows'


export class Profile {
  __defineGetter__ = function(key) {
    if (storage.get(PROFILE)) {
      return parseFloat(storage.get(PROFILE)[key]);
    }
    return undefined;
  }

  static set(key, value) {
    let profile = Profile.all()
    profile[key] = value
    storage.set(PROFILE, profile)
  }

  static all() {
    let profile = storage.get(PROFILE);

    if ( profile === null ) {
        profile = {
          netWorth: 100000.0,
          burnRate: 1000.0,
          salary: 50000.0,
          age: 25
        }
    }

    return profile;
  }

  static windows(name=null) {
    const windows = storage.get(WINDOWS) || {
        'home': [
          'compound-interest', 
          'com.mtgprofessor/monthly-payment'
        ]
    }

    if ( name === null ) {
        return windows;
    }

    return windows[name]
  }
}

export default Profile
