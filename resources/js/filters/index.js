import Vue from "vue";
import moment from "moment";
import store from "../stores/index";
import * as converter from "number-to-words";

Vue.filter("capitalize", function (words) {
  if (!words) return "";
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
});

Vue.filter("upperText", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.toUpperCase();
});

Vue.filter("removeDash", function (value) {
  if (!value) return "";
  value = value.toString();
  return value.replace(/-/g, " ");
});

Vue.filter("myDateTime", function (created) {
  return moment(created).format("Do MMMM, YYYY hh:mm:ss A");
});

Vue.filter("myDate", function (created) {
  return moment(created).format("Do MMMM, YYYY");
});

Vue.filter("date", function (created) {
  return moment(created).format("Do MMM, YYYY");
});

Vue.filter("round_to_2dp", function (num) {
  return num.toFixed(2);
});

Vue.filter("myTime", function (time) {
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];
  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(""); // return adjusted time or original string
});

Vue.filter("withCurrencySymbol", function (amount) {
  return "৳ " + amount;
});

Vue.filter("withCurrency", function (amount) {
  if (store.state.lang === "en") {
    return amount + " BDT";
  } else if (store.state.lang === "bn") {
    return amount + " টাকা";
  }
  return "";
});

Vue.filter("toWords", function (value) {
  if (!value) return "";
  return "Only " + converter.toWords(value);
});

Vue.filter("students", function (data) {
  if (store.state.lang === "en") {
    return data + " Students";
  } else if (store.state.lang === "bn") {
    return data + " শিক্ষার্থী";
  }
  return "";
});

Vue.filter("persons", function (data) {
  if (store.state.lang === "en") {
    return data + " 's";
  } else if (store.state.lang === "bn") {
    return data + " জন";
  }
  return "";
});

Vue.filter("items", function (data) {
  if (store.state.lang === "en") {
    return data + `'s`;
  } else if (store.state.lang === "bn") {
    return data + " টি";
  }
  return "";
});

Vue.filter("numberConversion", function (data) {
  if (data == undefined) return "";
  if (store.state.lang === "en") {
    return data;
  } else if (store.state.lang === "bn") {
    const toBn = (n) => n.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
    return toBn(data);
  }
  return "";
});
