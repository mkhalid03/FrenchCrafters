<template>
  <el-select id="dest_country" v-model="country" @change="onChange" placeholder="Country" filterable>
    <el-option value="AF" label="Afghanistan">Afghanistan</el-option>
    <el-option value="AX" label="Åland Islands">Åland Islands</el-option>
    <el-option value="AL" label="Albania">Albania</el-option>
    <el-option value="DZ" label="Algeria">Algeria</el-option>
    <el-option value="AS" label="American Samoa">American Samoa</el-option>
    <el-option value="AD" label="Andorra">Andorra</el-option>
    <el-option value="AO" label="Angola">Angola</el-option>
    <el-option value="AI" label="Anguilla">Anguilla</el-option>
    <el-option value="AQ" label="Antarctica">Antarctica</el-option>
    <el-option value="AG" label="Antigua and Barbuda">Antigua and Barbuda</el-option>
    <el-option value="AR" label="Argentina">Argentina</el-option>
    <el-option value="AM" label="Armenia">Armenia</el-option>
    <el-option value="AW" label="Aruba">Aruba</el-option>
    <el-option value="AU" label="Australia">Australia</el-option>
    <el-option value="AT" label="Austria">Austria</el-option>
    <el-option value="AZ" label="Azerbaijan">Azerbaijan</el-option>
    <el-option value="BS" label="Bahamas">Bahamas</el-option>
    <el-option value="BH" label="Bahrain">Bahrain</el-option>
    <el-option value="BD" label="Bangladesh">Bangladesh</el-option>
    <el-option value="BB" label="Barbados">Barbados</el-option>
    <el-option value="BY" label="Belarus">Belarus</el-option>
    <el-option value="BE" label="Belgium">Belgium</el-option>
    <el-option value="BZ" label="Belize">Belize</el-option>
    <el-option value="BJ" label="Benin">Benin</el-option>
    <el-option value="BM" label="Bermuda">Bermuda</el-option>
    <el-option value="BT" label="Bhutan">Bhutan</el-option>
    <el-option value="BO" label="Bolivia, Plurinational State of">Bolivia, Plurinational State of</el-option>
    <el-option value="BQ" label="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</el-option>
    <el-option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</el-option>
    <el-option value="BW" label="Botswana">Botswana</el-option>
    <el-option value="BV" label="Bouvet Island">Bouvet Island</el-option>
    <el-option value="BR" label="Brazil">Brazil</el-option>
    <el-option value="IO" label="British Indian Ocean Territory">British Indian Ocean Territory</el-option>
    <el-option value="BN" label="Brunei Darussalam">Brunei Darussalam</el-option>
    <el-option value="BG" label="Bulgaria">Bulgaria</el-option>
    <el-option value="BF" label="Burkina Faso">Burkina Faso</el-option>
    <el-option value="BI" label="Burundi">Burundi</el-option>
    <el-option value="KH" label="Cambodia">Cambodia</el-option>
    <el-option value="CM" label="Cameroon">Cameroon</el-option>
    <el-option value="CA" label="Canada">Canada</el-option>
    <el-option value="CV" label="Cape Verde">Cape Verde</el-option>
    <el-option value="KY" label="Cayman Islands">Cayman Islands</el-option>
    <el-option value="CF" label="Central African Republic">Central African Republic</el-option>
    <el-option value="TD" label="Chad">Chad</el-option>
    <el-option value="CL" label="Chile">Chile</el-option>
    <el-option value="CN" label="China">China</el-option>
    <el-option value="CX" label="Christmas Island">Christmas Island</el-option>
    <el-option value="CC" label="Cocos (Keeling) Islands">Cocos (Keeling) Islands</el-option>
    <el-option value="CO" label="Colombia">Colombia</el-option>
    <el-option value="KM" label="Comoros">Comoros</el-option>
    <el-option value="CG" label="Congo">Congo</el-option>
    <el-option value="CD" label="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</el-option>
    <el-option value="CK" label="Cook Islands">Cook Islands</el-option>
    <el-option value="CR" label="Costa Rica">Costa Rica</el-option>
    <el-option value="CI" label="Côte d'Ivoire">Côte d'Ivoire</el-option>
    <el-option value="HR" label="Croatia">Croatia</el-option>
    <el-option value="CU" label="Cuba">Cuba</el-option>
    <el-option value="CW" label="Curaçao">Curaçao</el-option>
    <el-option value="CY" label="Cyprus">Cyprus</el-option>
    <el-option value="CZ" label="Czech Republic">Czech Republic</el-option>
    <el-option value="DK" label="Denmark">Denmark</el-option>
    <el-option value="DJ" label="Djibouti">Djibouti</el-option>
    <el-option value="DM" label="Dominica">Dominica</el-option>
    <el-option value="DO" label="Dominican Republic">Dominican Republic</el-option>
    <el-option value="EC" label="Ecuador">Ecuador</el-option>
    <el-option value="EG" label="Egypt">Egypt</el-option>
    <el-option value="SV" label="El Salvador">El Salvador</el-option>
    <el-option value="GQ" label="Equatorial Guinea">Equatorial Guinea</el-option>
    <el-option value="ER" label="Eritrea">Eritrea</el-option>
    <el-option value="EE" label="Estonia">Estonia</el-option>
    <el-option value="ET" label="Ethiopia">Ethiopia</el-option>
    <el-option value="FK" label="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</el-option>
    <el-option value="FO" label="Faroe Islands">Faroe Islands</el-option>
    <el-option value="FJ" label="Fiji">Fiji</el-option>
    <el-option value="FI" label="Finland">Finland</el-option>
    <el-option value="FR" label="France">France</el-option>
    <el-option value="GF" label="French Guiana">French Guiana</el-option>
    <el-option value="PF" label="French Polynesia">French Polynesia</el-option>
    <el-option value="TF" label="French Southern Territories">French Southern Territories</el-option>
    <el-option value="GA" label="Gabon">Gabon</el-option>
    <el-option value="GM" label="Gambia">Gambia</el-option>
    <el-option value="GE" label="Georgia">Georgia</el-option>
    <el-option value="DE" label="Germany">Germany</el-option>
    <el-option value="GH" label="Ghana">Ghana</el-option>
    <el-option value="GI" label="Gibraltar">Gibraltar</el-option>
    <el-option value="GR" label="Greece">Greece</el-option>
    <el-option value="GL" label="Greenland">Greenland</el-option>
    <el-option value="GD" label="Grenada">Grenada</el-option>
    <el-option value="GP" label="Guadeloupe">Guadeloupe</el-option>
    <el-option value="GU" label="Guam">Guam</el-option>
    <el-option value="GT" label="Guatemala">Guatemala</el-option>
    <el-option value="GG" label="Guernsey">Guernsey</el-option>
    <el-option value="GN" label="Guinea">Guinea</el-option>
    <el-option value="GW" label="Guinea-Bissau">Guinea-Bissau</el-option>
    <el-option value="GY" label="Guyana">Guyana</el-option>
    <el-option value="HT" label="Haiti">Haiti</el-option>
    <el-option value="HM" label="Heard Island and McDonald Islands">Heard Island and McDonald Islands</el-option>
    <el-option value="VA" label="Holy See (Vatican City State)">Holy See (Vatican City State)</el-option>
    <el-option value="HN" label="Honduras">Honduras</el-option>
    <el-option value="HK" label="Hong Kong">Hong Kong</el-option>
    <el-option value="HU" label="Hungary">Hungary</el-option>
    <el-option value="IS" label="Iceland">Iceland</el-option>
    <el-option value="IN" label="India">India</el-option>
    <el-option value="ID" label=Indonesia"">Indonesia</el-option>
    <el-option value="IR" label="Iran, Islamic Republic of">Iran, Islamic Republic of</el-option>
    <el-option value="IQ" label="Iraq">Iraq</el-option>
    <el-option value="IE" label="Ireland">Ireland</el-option>
    <el-option value="IM" label="Isle of Man">Isle of Man</el-option>
    <el-option value="IL" label="Israel">Israel</el-option>
    <el-option value="IT" label="Italy">Italy</el-option>
    <el-option value="JM" label="Jamaica">Jamaica</el-option>
    <el-option value="JP" label="Japan">Japan</el-option>
    <el-option value="JE" label="Jersey">Jersey</el-option>
    <el-option value="JO" label="Jordan">Jordan</el-option>
    <el-option value="KZ" label="Kazakhstan">Kazakhstan</el-option>
    <el-option value="KE" label="Kenya">Kenya</el-option>
    <el-option value="KI" label="Kiribati">Kiribati</el-option>
    <el-option value="KP" label="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</el-option>
    <el-option value="KR" label="Korea, Republic of">Korea, Republic of</el-option>
    <el-option value="KW" label="Kuwait">Kuwait</el-option>
    <el-option value="KG" label="Kyrgyzstan">Kyrgyzstan</el-option>
    <el-option value="LA" label="Lao People's Democratic Republic">Lao People's Democratic Republic</el-option>
    <el-option value="LV" label="Latvia">Latvia</el-option>
    <el-option value="LB" label="Lebanon">Lebanon</el-option>
    <el-option value="LS" label="Lesotho">Lesotho</el-option>
    <el-option value="LR" label="Liberia">Liberia</el-option>
    <el-option value="LY" label="Libya">Libya</el-option>
    <el-option value="LI" label="Liechtenstein">Liechtenstein</el-option>
    <el-option value="LT" label="Lithuania">Lithuania</el-option>
    <el-option value="LU" label="Luxembourg">Luxembourg</el-option>
    <el-option value="MO" label="Macao">Macao</el-option>
    <el-option value="MK" label="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</el-option>
    <el-option value="MG" label="Madagascar">Madagascar</el-option>
    <el-option value="MW" label="Malawi">Malawi</el-option>
    <el-option value="MY" label="Malaysia">Malaysia</el-option>
    <el-option value="MV" label="Maldives">Maldives</el-option>
    <el-option value="ML" label="Mali">Mali</el-option>
    <el-option value="MT" label="Malta">Malta</el-option>
    <el-option value="MH" label="Marshall Islands">Marshall Islands</el-option>
    <el-option value="MQ" label="Martinique">Martinique</el-option>
    <el-option value="MR" label="Mauritania">Mauritania</el-option>
    <el-option value="MU" label="Mauritius">Mauritius</el-option>
    <el-option value="YT" label="Mayotte">Mayotte</el-option>
    <el-option value="MX" label="Mexico">Mexico</el-option>
    <el-option value="FM" label="Micronesia, Federated States of">Micronesia, Federated States of</el-option>
    <el-option value="MD" label="Moldova, Republic of">Moldova, Republic of</el-option>
    <el-option value="MC" label="Monaco">Monaco</el-option>
    <el-option value="MN" label="Mongolia">Mongolia</el-option>
    <el-option value="ME" label="Montenegro">Montenegro</el-option>
    <el-option value="MS" label="Montserrat">Montserrat</el-option>
    <el-option value="MA" label="Morocco">Morocco</el-option>
    <el-option value="MZ" label="Mozambique">Mozambique</el-option>
    <el-option value="MM" label="Myanmar">Myanmar</el-option>
    <el-option value="NA" label="Namibia">Namibia</el-option>
    <el-option value="NR" label="Nauru">Nauru</el-option>
    <el-option value="NP" label="Nepal">Nepal</el-option>
    <el-option value="NL" label="Netherlands">Netherlands</el-option>
    <el-option value="NC" label="New Caledonia">New Caledonia</el-option>
    <el-option value="NZ" label="New Zealand">New Zealand</el-option>
    <el-option value="NI" label="Nicaragua">Nicaragua</el-option>
    <el-option value="NE" label="Niger">Niger</el-option>
    <el-option value="NG" label="Nigeria">Nigeria</el-option>
    <el-option value="NU" label="Niue">Niue</el-option>
    <el-option value="NF" label="Norfolk Island">Norfolk Island</el-option>
    <el-option value="MP" label="Northern Mariana Islands">Northern Mariana Islands</el-option>
    <el-option value="NO" label="Norway">Norway</el-option>
    <el-option value="OM" label="Oman">Oman</el-option>
    <el-option value="PK" label="Pakistan">Pakistan</el-option>
    <el-option value="PW" label="Palau">Palau</el-option>
    <el-option value="PS" label="Palestinian Territory, Occupied">Palestinian Territory, Occupied</el-option>
    <el-option value="PA" label="Panama">Panama</el-option>
    <el-option value="PG" label="Papua New Guinea">Papua New Guinea</el-option>
    <el-option value="PY" label="Paraguay">Paraguay</el-option>
    <el-option value="PE" label="Peru">Peru</el-option>
    <el-option value="PH" label="Philippines">Philippines</el-option>
    <el-option value="PN" label="Pitcairn">Pitcairn</el-option>
    <el-option value="PL" label="Poland">Poland</el-option>
    <el-option value="PT" label="Portugal">Portugal</el-option>
    <el-option value="PR" label="Puerto Rico">Puerto Rico</el-option>
    <el-option value="QA" label="Qatar">Qatar</el-option>
    <el-option value="RE" label="Réunion">Réunion</el-option>
    <el-option value="RO" label="Romania">Romania</el-option>
    <el-option value="RU" label="">Russian Federation</el-option>
    <el-option value="RW" label="Rwanda">Rwanda</el-option>
    <el-option value="BL" label="Saint Barthélemy">Saint Barthélemy</el-option>
    <el-option value="SH" label="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</el-option>
    <el-option value="KN" label="Saint Kitts and Nevis">Saint Kitts and Nevis</el-option>
    <el-option value="LC" label="Saint Lucia">Saint Lucia</el-option>
    <el-option value="MF" label="Saint Martin (French part)">Saint Martin (French part)</el-option>
    <el-option value="PM" label="Saint Pierre and Miquelon">Saint Pierre and Miquelon</el-option>
    <el-option value="VC" label="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</el-option>
    <el-option value="WS" label="Samoa">Samoa</el-option>
    <el-option value="SM" label="San Marino">San Marino</el-option>
    <el-option value="ST" label="Sao Tome and Principe">Sao Tome and Principe</el-option>
    <el-option value="SA" label="Saudi Arabia">Saudi Arabia</el-option>
    <el-option value="SN" label="Senegal">Senegal</el-option>
    <el-option value="RS" label="Serbia">Serbia</el-option>
    <el-option value="SC" label="Seychelles">Seychelles</el-option>
    <el-option value="SL" label="Sierra Leone">Sierra Leone</el-option>
    <el-option value="SG" label="Singapore">Singapore</el-option>
    <el-option value="SX" label="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</el-option>
    <el-option value="SK" label="Slovakia">Slovakia</el-option>
    <el-option value="SI" label="Slovenia">Slovenia</el-option>
    <el-option value="SB" label="Solomon Islands">Solomon Islands</el-option>
    <el-option value="SO" label="Somalia">Somalia</el-option>
    <el-option value="ZA" label="South Africa">South Africa</el-option>
    <el-option value="GS" label="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</el-option>
    <el-option value="SS" label="South Sudan">South Sudan</el-option>
    <el-option value="ES" label="Spain">Spain</el-option>
    <el-option value="LK" label="Sri Lanka">Sri Lanka</el-option>
    <el-option value="SD" label="Sudan">Sudan</el-option>
    <el-option value="SR" label="Suriname">Suriname</el-option>
    <el-option value="SJ" label="Svalbard and Jan Mayen">Svalbard and Jan Mayen</el-option>
    <el-option value="SZ" label="Swaziland">Swaziland</el-option>
    <el-option value="SE" label="Sweden">Sweden</el-option>
    <el-option value="CH" label=Switzerland"">Switzerland</el-option>
    <el-option value="SY" label="Syrian Arab Republic">Syrian Arab Republic</el-option>
    <el-option value="TW" label="Taiwan, Province of China">Taiwan, Province of China</el-option>
    <el-option value="TJ" label="Tajikistan">Tajikistan</el-option>
    <el-option value="TZ" label="Tanzania, United Republic of">Tanzania, United Republic of</el-option>
    <el-option value="TH" label="Thailand">Thailand</el-option>
    <el-option value="TL" label="Timor-Leste">Timor-Leste</el-option>
    <el-option value="TG" label="Togo">Togo</el-option>
    <el-option value="TK" label="Tokelau">Tokelau</el-option>
    <el-option value="TO" label="Tonga">Tonga</el-option>
    <el-option value="TT" label="Trinidad and Tobago">Trinidad and Tobago</el-option>
    <el-option value="TN" label="Tunisia">Tunisia</el-option>
    <el-option value="TR" label="Turkey">Turkey</el-option>
    <el-option value="TM" label="Turkmenistan">Turkmenistan</el-option>
    <el-option value="TC" label="Turks and Caicos Islands">Turks and Caicos Islands</el-option>
    <el-option value="TV" label="Tuvalu">Tuvalu</el-option>
    <el-option value="UG" label="Uganda">Uganda</el-option>
    <el-option value="UA" label="Ukraine">Ukraine</el-option>
    <el-option value="AE" label="United Arab Emirates">United Arab Emirates</el-option>
    <el-option value="GB" label="United Kingdom">United Kingdom</el-option>
    <el-option value="US" label="United States">United States</el-option>
    <el-option value="UM" label="United States Minor Outlying Islands">United States Minor Outlying Islands</el-option>
    <el-option value="UY" label="Uruguay">Uruguay</el-option>
    <el-option value="UZ" label="Uzbekistan">Uzbekistan</el-option>
    <el-option value="VU" label="Vanuatu">Vanuatu</el-option>
    <el-option value="VE" label="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</el-option>
    <el-option value="VN" label="Viet Nam">Viet Nam</el-option>
    <el-option value="VG" label="Virgin Islands, British">Virgin Islands, British</el-option>
    <el-option value="VI" label="Virgin Islands, U.S.">Virgin Islands, U.S.</el-option>
    <el-option value="WF" label="Wallis and Futuna">Wallis and Futuna</el-option>
    <el-option value="EH" label="Western Sahara">Western Sahara</el-option>
    <el-option value="YE" label="Yemen">Yemen</el-option>
    <el-option value="ZM" label="Zambia">Zambia</el-option>
    <el-option value="ZW" label="Zimbabwe">Zimbabwe</el-option>
  </el-select>
</template>

<script>
export default {
  name: "CountrySelect",
  data: function() {
    return {
      country: null
    }
  },
  methods: {
    onChange: function () {
      this.$emit("change", this.country)
    },
  },
}
</script>
