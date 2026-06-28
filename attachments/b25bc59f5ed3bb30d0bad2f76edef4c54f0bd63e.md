# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/salesforce.spec.ts >> Lead Creation & Management (1)
- Location: tests/ui/salesforce.spec.ts:36:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Website' })
    - locator resolved to <input type="text" part="input" id="input-735" name="Website" maxlength="255" lwc-enmikoh2qu="" class="slds-input" aria-describedby="help-message-735"/>

```

# Page snapshot

```yaml
- generic:
  - generic:
    - generic [ref=e2]:
      - generic [ref=e3]:
        - link [ref=e4] [cursor=pointer]:
          - /url: javascript:void(0);
          - text: Skip to Navigation
        - link [ref=e5] [cursor=pointer]:
          - /url: javascript:void(0);
          - text: Skip to Main Content
        - generic [ref=e9]:
          - generic [ref=e13]:
            - button [ref=e17] [cursor=pointer]:
              - img [ref=e21]
              - generic [ref=e24]: Menu
            - generic [ref=e29]:
              - img [ref=e33]
              - generic [ref=e36]: Developer Edition
          - button [ref=e45] [cursor=pointer]:
            - img [ref=e47]
            - generic [ref=e50]: Show menu
        - generic [ref=e51]:
          - button [ref=e57]:
            - img [ref=e59]
            - text: Search...
          - navigation [ref=e62]:
            - list [ref=e64]:
              - listitem [ref=e65]:
                - group [ref=e66]:
                  - button [ref=e68] [cursor=pointer]:
                    - img [ref=e73]
                  - button [ref=e77] [cursor=pointer]:
                    - img [ref=e82]
              - listitem [ref=e85]:
                - button [ref=e91] [cursor=pointer]:
                  - img [ref=e96]
              - listitem [ref=e99]:
                - button [ref=e101] [cursor=pointer]:
                  - img [ref=e106]
              - listitem [ref=e109]:
                - button [ref=e112] [cursor=pointer]:
                  - img [ref=e117]
              - listitem [ref=e120]:
                - button [ref=e126] [cursor=pointer]:
                  - img [ref=e131]
              - listitem [ref=e134]:
                - button [ref=e137] [cursor=pointer]:
                  - img [ref=e143]
              - listitem [ref=e147]:
                - button [ref=e150] [cursor=pointer]
      - generic [ref=e155]:
        - generic [ref=e158]:
          - generic [ref=e160]:
            - navigation [ref=e161]:
              - button [ref=e163] [cursor=pointer]:
                - generic [ref=e174]: App Launcher
            - heading [level=1] [ref=e175]:
              - generic [ref=e176]: Sales
          - navigation [ref=e179]:
            - list [ref=e180]:
              - listitem [ref=e181]:
                - link [ref=e182] [cursor=pointer]:
                  - /url: /lightning/page/home
                  - generic [ref=e183]: Home
              - listitem [ref=e184]:
                - link [ref=e185] [cursor=pointer]:
                  - /url: /lightning/o/Opportunity/home
                  - generic [ref=e186]: Opportunities
                - button [ref=e190] [cursor=pointer]:
                  - img [ref=e194]
                  - generic [ref=e197]: Opportunities List
              - listitem [ref=e198] [cursor=pointer]:
                - link [ref=e199]:
                  - /url: /lightning/o/Lead/home
                  - generic [ref=e200]: Leads
                - button [ref=e204]:
                  - img [ref=e208]
                  - generic [ref=e211]: Leads List
              - listitem [ref=e212]:
                - link [ref=e213] [cursor=pointer]:
                  - /url: /lightning/o/Task/home
                  - generic [ref=e214]: Tasks
                - button [ref=e218] [cursor=pointer]:
                  - img [ref=e222]
                  - generic [ref=e225]: Tasks List
              - listitem [ref=e226]:
                - link [ref=e227] [cursor=pointer]:
                  - /url: /lightning/o/ContentDocument/home
                  - generic [ref=e228]: Files
                - button [ref=e232] [cursor=pointer]:
                  - img [ref=e236]
                  - generic [ref=e239]: Files List
              - listitem [ref=e240]:
                - link [ref=e241] [cursor=pointer]:
                  - /url: /lightning/o/Account/home
                  - generic [ref=e242]: Accounts
                - button [ref=e246] [cursor=pointer]:
                  - img [ref=e250]
                  - generic [ref=e253]: Accounts List
              - listitem [ref=e254]:
                - link [ref=e255] [cursor=pointer]:
                  - /url: /lightning/o/Contact/home
                  - generic [ref=e256]: Contacts
                - button [ref=e260] [cursor=pointer]:
                  - img [ref=e264]
                  - generic [ref=e267]: Contacts List
              - listitem [ref=e268]:
                - link [ref=e269] [cursor=pointer]:
                  - /url: /lightning/o/Campaign/home
                  - generic [ref=e270]: Campaigns
                - button [ref=e274] [cursor=pointer]:
                  - img [ref=e278]
                  - generic [ref=e281]: Campaigns List
              - listitem [ref=e282]:
                - link [ref=e283] [cursor=pointer]:
                  - /url: /lightning/o/Dashboard/home
                  - generic [ref=e284]: Dashboards
                - button [ref=e288] [cursor=pointer]:
                  - img [ref=e292]
                  - generic [ref=e295]: Dashboards List
              - listitem [ref=e296]:
                - button [ref=e298] [cursor=pointer]:
                  - generic [ref=e299]: More
                  - img [ref=e303]
                  - generic [ref=e306]: Show more navigation items
              - listitem [ref=e307]:
                - button [ref=e309] [cursor=pointer]:
                  - img [ref=e311]
                  - generic [ref=e314]: Edit nav items
        - main [ref=e316]:
          - generic [ref=e324]:
            - generic [ref=e326]:
              - generic [ref=e328]:
                - generic [ref=e332]:
                  - img [ref=e334]
                  - generic [ref=e338]: Lead
                - generic [ref=e339]:
                  - heading [level=1] [ref=e340]: Leads
                  - generic [ref=e345] [cursor=pointer]:
                    - heading [level=1] [ref=e346]:
                      - generic [ref=e347]: Leads
                      - generic [ref=e348]: My Leads
                    - button [ref=e351]:
                      - img [ref=e353]
                      - generic [ref=e356]: "Select a List View: Leads"
              - group [ref=e360]:
                - button [ref=e363] [cursor=pointer]:
                  - img [ref=e365]
                  - img [ref=e369]
                  - generic [ref=e372]: Lead View Settings
                - button [ref=e373] [cursor=pointer]:
                  - img [ref=e375]
                  - generic [ref=e378]: Refresh
                - button [ref=e382] [cursor=pointer]:
                  - img [ref=e384]
                  - generic [ref=e387]: Edit List
                - group [ref=e389]:
                  - generic [ref=e391]:
                    - button [ref=e393] [cursor=pointer]: New
                    - button [ref=e395] [cursor=pointer]: List View
            - generic [ref=e397]:
              - generic [ref=e401]:
                - generic [ref=e402]:
                  - generic [ref=e403]:
                    - generic [ref=e405]: Created
                    - button [ref=e410] [cursor=pointer]:
                      - text: This Quarter
                      - img [ref=e412]
                  - generic [ref=e415]:
                    - generic [ref=e417]: Owner
                    - button [ref=e422] [cursor=pointer]:
                      - text: Me
                      - img [ref=e424]
                - group [ref=e429]:
                  - generic [ref=e431]:
                    - generic [ref=e432]:
                      - button [ref=e435] [cursor=pointer]:
                        - img [ref=e437]
                        - generic [ref=e440]: Important Leads
                      - generic [ref=e441]: Apply Important Leads Filter
                    - tooltip [ref=e442]: Shows the leads you mark as important. If you filter your view, the same filters apply.
                  - button [ref=e446] [cursor=pointer]:
                    - img [ref=e448]
                    - generic [ref=e451]: Show filters
              - group [ref=e454]:
                - button [pressed] [ref=e456] [cursor=pointer]:
                  - generic [ref=e457]:
                    - paragraph [ref=e459]: Total Leads
                    - paragraph [ref=e460]: "5"
                - generic [ref=e461]:
                  - button [ref=e462] [cursor=pointer]:
                    - generic [ref=e463]:
                      - paragraph [ref=e465]: No Activity
                      - paragraph [ref=e467]: "5"
                  - button [ref=e471] [cursor=pointer]:
                    - img [ref=e473]
                    - generic [ref=e476]: Help
                - generic [ref=e477]:
                  - button [ref=e478] [cursor=pointer]:
                    - generic [ref=e479]:
                      - paragraph [ref=e481]: Idle
                      - paragraph [ref=e483]: "0"
                  - button [ref=e487] [cursor=pointer]:
                    - img [ref=e489]
                    - generic [ref=e492]: Help
                - generic [ref=e493]:
                  - button [ref=e494] [cursor=pointer]:
                    - generic [ref=e495]:
                      - paragraph [ref=e497]: No Upcoming
                      - paragraph [ref=e499]: "0"
                  - button [ref=e503] [cursor=pointer]:
                    - img [ref=e505]
                    - generic [ref=e508]: Help
                - button [ref=e510] [cursor=pointer]:
                  - generic [ref=e511]:
                    - paragraph [ref=e513]: Overdue
                    - paragraph [ref=e514]: "0"
                - button [ref=e516] [cursor=pointer]:
                  - generic [ref=e517]:
                    - paragraph [ref=e519]: Due Today
                    - paragraph [ref=e520]: "0"
                - generic [ref=e521]:
                  - button [ref=e522] [cursor=pointer]:
                    - generic [ref=e523]:
                      - paragraph [ref=e525]: Upcoming
                      - paragraph [ref=e527]: "0"
                  - button [ref=e531] [cursor=pointer]:
                    - img [ref=e533]
                    - generic [ref=e536]: Help
              - generic [ref=e538]:
                - generic [ref=e540]:
                  - status [ref=e544]: 5 items • Filtered by Created Date, Me, Total Leads
                  - group [ref=e547]:
                    - generic [ref=e549]:
                      - button [ref=e551] [cursor=pointer]: Change Status
                      - button [ref=e553] [cursor=pointer]: Change Owner
                      - button [ref=e555] [cursor=pointer]: Send Email
                      - button [ref=e557] [cursor=pointer]: Assign Label
                - generic [ref=e568]:
                  - generic [ref=e569]: Navigation Mode
                  - grid [ref=e573]:
                    - generic [ref=e577]:
                      - generic [ref=e578]: Choose a Row
                      - generic [ref=e580]:
                        - checkbox [ref=e581]
                        - generic [ref=e584]: Select 5 items
                    - generic [ref=e586]:
                      - button [ref=e587] [cursor=pointer]:
                        - generic [ref=e588]: "Sort by:"
                        - generic [ref=e589]: Name
                      - generic [ref=e590]: "Sorted: None"
                      - button [ref=e592] [cursor=pointer]:
                        - img [ref=e594]
                        - generic [ref=e597]: Show Name column actions
                      - slider [ref=e598]: "142"
                    - generic [ref=e606]:
                      - img [ref=e608]
                      - generic [ref=e611]: Important
                    - generic [ref=e613]:
                      - button [ref=e614] [cursor=pointer]:
                        - generic [ref=e615]: "Sort by:"
                        - generic [ref=e616]: Title
                      - generic [ref=e617]: "Sorted: None"
                      - button [ref=e619] [cursor=pointer]:
                        - img [ref=e621]
                        - generic [ref=e624]: Show Title column actions
                      - slider [ref=e625]: "195"
                    - generic [ref=e629]:
                      - button [ref=e630] [cursor=pointer]:
                        - generic [ref=e631]: "Sort by:"
                        - generic [ref=e632]: Company
                      - generic [ref=e633]: "Sorted: None"
                      - button [ref=e635] [cursor=pointer]:
                        - img [ref=e637]
                        - generic [ref=e640]: Show Company column actions
                      - slider [ref=e641]: "165"
                    - generic [ref=e645]:
                      - button [ref=e646] [cursor=pointer]:
                        - generic [ref=e647]: "Sort by:"
                        - generic [ref=e648]: Lead Status
                      - generic [ref=e649]: "Sorted: None"
                      - button [ref=e651] [cursor=pointer]:
                        - img [ref=e653]
                        - generic [ref=e656]: Show Lead Status column actions
                      - slider [ref=e657]: "150"
                    - generic [ref=e661]:
                      - button [ref=e662] [cursor=pointer]:
                        - generic [ref=e663]: "Sort by:"
                        - generic [ref=e664]: Lead Source
                      - generic [ref=e665]: "Sorted: None"
                      - button [ref=e667] [cursor=pointer]:
                        - img [ref=e669]
                        - generic [ref=e672]: Show Lead Source column actions
                      - slider [ref=e673]: "140"
                    - generic [ref=e677]:
                      - button [ref=e678] [cursor=pointer]:
                        - generic [ref=e679]: "Sort by:"
                        - generic [ref=e680]: Last Activity
                      - generic [ref=e681]: "Sorted: None"
                      - button [ref=e683] [cursor=pointer]:
                        - img [ref=e685]
                        - generic [ref=e688]: Show Last Activity column actions
                      - slider [ref=e689]: "140"
                    - generic [ref=e695]: Actions
                    - rowgroup [ref=e699]:
                      - row [ref=e700]:
                        - gridcell [ref=e701]
                        - gridcell [ref=e706]:
                          - generic [ref=e708]:
                            - checkbox [ref=e709]
                            - generic [ref=e712]: Select Item 1
                        - rowheader [ref=e713]:
                          - generic [ref=e715]:
                            - generic [ref=e719]:
                              - link [ref=e722] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00Qg5000005M5ZFEA0/view
                                - generic [ref=e723]: Alycia Kassulke
                              - button [ref=e725] [cursor=pointer]:
                                - img [ref=e727]
                                - generic [ref=e730]: "View Activity: Alycia Kassulke"
                            - img [ref=e731]:
                              - img [ref=e733]
                        - gridcell [ref=e736]:
                          - button [ref=e745] [cursor=pointer]:
                            - img [ref=e747]
                            - generic [ref=e750]: "Mark Important: Alycia Kassulke"
                        - gridcell [ref=e751]:
                          - generic [ref=e753]:
                            - generic [ref=e756]: National Marketing Liaison
                            - button [ref=e757] [cursor=pointer]:
                              - img [ref=e759]
                              - generic [ref=e762]: Edit Title
                        - gridcell [ref=e763]:
                          - generic [ref=e765]:
                            - generic [ref=e768]: Kuhic - Mills
                            - button [ref=e769] [cursor=pointer]:
                              - img [ref=e771]
                              - generic [ref=e774]: Edit Company
                        - gridcell [ref=e775]:
                          - generic [ref=e777]:
                            - generic [ref=e780]: Working - Contacted
                            - button [ref=e781] [cursor=pointer]:
                              - img [ref=e783]
                              - generic [ref=e786]: Edit Lead Status
                        - gridcell [ref=e787]:
                          - generic [ref=e789]:
                            - generic [ref=e792]: Web
                            - button [ref=e793] [cursor=pointer]:
                              - img [ref=e795]
                              - generic [ref=e798]: Edit Lead Source
                        - gridcell [ref=e799]:
                          - img [ref=e802]:
                            - img [ref=e804]
                        - gridcell [ref=e807]:
                          - group [ref=e814]:
                            - generic [ref=e816]:
                              - button [ref=e818] [cursor=pointer]:
                                - img [ref=e820]
                                - generic [ref=e823]: Email
                              - button [ref=e825] [cursor=pointer]:
                                - img [ref=e827]
                                - generic [ref=e830]: Call
                        - gridcell [ref=e831]
                      - row [ref=e832]:
                        - gridcell [ref=e833]
                        - gridcell [ref=e838]:
                          - generic [ref=e840]:
                            - checkbox [ref=e841]
                            - generic [ref=e844]: Select Item 2
                        - rowheader [ref=e845]:
                          - generic [ref=e847]:
                            - generic [ref=e851]:
                              - link [ref=e854] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00Qg5000005M5arEAC/view
                                - generic [ref=e855]: Bridie Funk-Legros
                              - button [ref=e857] [cursor=pointer]:
                                - img [ref=e859]
                                - generic [ref=e862]: "View Activity: Bridie Funk-Legros"
                            - img [ref=e863]:
                              - img [ref=e865]
                        - gridcell [ref=e868]:
                          - button [ref=e877] [cursor=pointer]:
                            - img [ref=e879]
                            - generic [ref=e882]: "Mark Important: Bridie Funk-Legros"
                        - gridcell [ref=e883]:
                          - generic [ref=e885]:
                            - generic [ref=e888]: District Data Specialist
                            - button [ref=e889] [cursor=pointer]:
                              - img [ref=e891]
                              - generic [ref=e894]: Edit Title
                        - gridcell [ref=e895]:
                          - generic [ref=e897]:
                            - generic [ref=e900]: Cassin and Sons
                            - button [ref=e901] [cursor=pointer]:
                              - img [ref=e903]
                              - generic [ref=e906]: Edit Company
                        - gridcell [ref=e907]:
                          - generic [ref=e909]:
                            - generic [ref=e912]: Working - Contacted
                            - button [ref=e913] [cursor=pointer]:
                              - img [ref=e915]
                              - generic [ref=e918]: Edit Lead Status
                        - gridcell [ref=e919]:
                          - generic [ref=e921]:
                            - generic [ref=e924]: Partner Referral
                            - button [ref=e925] [cursor=pointer]:
                              - img [ref=e927]
                              - generic [ref=e930]: Edit Lead Source
                        - gridcell [ref=e931]:
                          - img [ref=e934]:
                            - img [ref=e936]
                        - gridcell [ref=e939]:
                          - group [ref=e946]:
                            - generic [ref=e948]:
                              - button [ref=e950] [cursor=pointer]:
                                - img [ref=e952]
                                - generic [ref=e955]: Email
                              - button [ref=e957] [cursor=pointer]:
                                - img [ref=e959]
                                - generic [ref=e962]: Call
                        - gridcell [ref=e963]
                      - row [ref=e964]:
                        - gridcell [ref=e965]
                        - gridcell [ref=e970]:
                          - generic [ref=e972]:
                            - checkbox [ref=e973]
                            - generic [ref=e976]: Select Item 3
                        - rowheader [ref=e977]:
                          - generic [ref=e979]:
                            - generic [ref=e983]:
                              - link [ref=e986] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00Qg5000005M5m9EAC/view
                                - generic [ref=e987]: Jamie Pollich
                              - button [ref=e989] [cursor=pointer]:
                                - img [ref=e991]
                                - generic [ref=e994]: "View Activity: Jamie Pollich"
                            - img [ref=e995]:
                              - img [ref=e997]
                        - gridcell [ref=e1000]:
                          - button [ref=e1009] [cursor=pointer]:
                            - img [ref=e1011]
                            - generic [ref=e1014]: "Mark Important: Jamie Pollich"
                        - gridcell [ref=e1015]:
                          - generic [ref=e1017]:
                            - generic [ref=e1020]: Dynamic Paradigm Supervisor
                            - button [ref=e1021] [cursor=pointer]:
                              - img [ref=e1023]
                              - generic [ref=e1026]: Edit Title
                        - gridcell [ref=e1027]:
                          - generic [ref=e1029]:
                            - generic [ref=e1032]: Gleason, Littel and Kuphal
                            - button [ref=e1033] [cursor=pointer]:
                              - img [ref=e1035]
                              - generic [ref=e1038]: Edit Company
                        - gridcell [ref=e1039]:
                          - generic [ref=e1041]:
                            - generic [ref=e1044]: Working - Contacted
                            - button [ref=e1045] [cursor=pointer]:
                              - img [ref=e1047]
                              - generic [ref=e1050]: Edit Lead Status
                        - gridcell [ref=e1051]:
                          - generic [ref=e1053]:
                            - generic [ref=e1056]: Web
                            - button [ref=e1057] [cursor=pointer]:
                              - img [ref=e1059]
                              - generic [ref=e1062]: Edit Lead Source
                        - gridcell [ref=e1063]:
                          - img [ref=e1066]:
                            - img [ref=e1068]
                        - gridcell [ref=e1071]:
                          - group [ref=e1078]:
                            - generic [ref=e1080]:
                              - button [ref=e1082] [cursor=pointer]:
                                - img [ref=e1084]
                                - generic [ref=e1087]: Email
                              - button [ref=e1089] [cursor=pointer]:
                                - img [ref=e1091]
                                - generic [ref=e1094]: Call
                        - gridcell [ref=e1095]
                      - row [ref=e1096]:
                        - gridcell [ref=e1097]
                        - gridcell [ref=e1102]:
                          - generic [ref=e1104]:
                            - checkbox [ref=e1105]
                            - generic [ref=e1108]: Select Item 4
                        - rowheader [ref=e1109]:
                          - generic [ref=e1111]:
                            - generic [ref=e1115]:
                              - link [ref=e1118] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00Qg5000005M6GnEAK/view
                                - generic [ref=e1119]: Naomi Hintz
                              - button [ref=e1121] [cursor=pointer]:
                                - img [ref=e1123]
                                - generic [ref=e1126]: "View Activity: Naomi Hintz"
                            - img [ref=e1127]:
                              - img [ref=e1129]
                        - gridcell [ref=e1132]:
                          - button [ref=e1141] [cursor=pointer]:
                            - img [ref=e1143]
                            - generic [ref=e1146]: "Mark Important: Naomi Hintz"
                        - gridcell [ref=e1147]:
                          - generic [ref=e1149]:
                            - generic [ref=e1152]: Regional Response Producer
                            - button [ref=e1153] [cursor=pointer]:
                              - img [ref=e1155]
                              - generic [ref=e1158]: Edit Title
                        - gridcell [ref=e1159]:
                          - generic [ref=e1161]:
                            - generic [ref=e1164]: Hartmann, Willms and Wuckert
                            - button [ref=e1165] [cursor=pointer]:
                              - img [ref=e1167]
                              - generic [ref=e1170]: Edit Company
                        - gridcell [ref=e1171]:
                          - generic [ref=e1173]:
                            - generic [ref=e1176]: Open - Not Contacted
                            - button [ref=e1177] [cursor=pointer]:
                              - img [ref=e1179]
                              - generic [ref=e1182]: Edit Lead Status
                        - gridcell [ref=e1183]:
                          - generic [ref=e1185]:
                            - generic [ref=e1188]: Partner Referral
                            - button [ref=e1189] [cursor=pointer]:
                              - img [ref=e1191]
                              - generic [ref=e1194]: Edit Lead Source
                        - gridcell [ref=e1195]:
                          - img [ref=e1198]:
                            - img [ref=e1200]
                        - gridcell [ref=e1203]:
                          - group [ref=e1210]:
                            - generic [ref=e1212]:
                              - button [ref=e1214] [cursor=pointer]:
                                - img [ref=e1216]
                                - generic [ref=e1219]: Email
                              - button [ref=e1221] [cursor=pointer]:
                                - img [ref=e1223]
                                - generic [ref=e1226]: Call
                        - gridcell [ref=e1227]
                      - row [ref=e1228]:
                        - gridcell [ref=e1229]
                        - gridcell [ref=e1234]:
                          - generic [ref=e1236]:
                            - checkbox [ref=e1237]
                            - generic [ref=e1240]: Select Item 5
                        - rowheader [ref=e1241]:
                          - generic [ref=e1243]:
                            - generic [ref=e1247]:
                              - link [ref=e1250] [cursor=pointer]:
                                - /url: /lightning/r/Lead/00Qg5000005M6WvEAK/view
                                - generic [ref=e1251]: Marilie Bahringer
                              - button [ref=e1253] [cursor=pointer]:
                                - img [ref=e1255]
                                - generic [ref=e1258]: "View Activity: Marilie Bahringer"
                            - img [ref=e1259]:
                              - img [ref=e1261]
                        - gridcell [ref=e1264]:
                          - button [ref=e1273] [cursor=pointer]:
                            - img [ref=e1275]
                            - generic [ref=e1278]: "Mark Important: Marilie Bahringer"
                        - gridcell [ref=e1279]:
                          - generic [ref=e1281]:
                            - generic [ref=e1284]: Corporate Group Consultant
                            - button [ref=e1285] [cursor=pointer]:
                              - img [ref=e1287]
                              - generic [ref=e1290]: Edit Title
                        - gridcell [ref=e1291]:
                          - generic [ref=e1293]:
                            - generic [ref=e1296]: Huel - Larkin
                            - button [ref=e1297] [cursor=pointer]:
                              - img [ref=e1299]
                              - generic [ref=e1302]: Edit Company
                        - gridcell [ref=e1303]:
                          - generic [ref=e1305]:
                            - generic [ref=e1308]: Working - Contacted
                            - button [ref=e1309] [cursor=pointer]:
                              - img [ref=e1311]
                              - generic [ref=e1314]: Edit Lead Status
                        - gridcell [ref=e1315]:
                          - generic [ref=e1317]:
                            - generic [ref=e1320]: Web
                            - button [ref=e1321] [cursor=pointer]:
                              - img [ref=e1323]
                              - generic [ref=e1326]: Edit Lead Source
                        - gridcell [ref=e1327]:
                          - img [ref=e1330]:
                            - img [ref=e1332]
                        - gridcell [ref=e1335]:
                          - group [ref=e1342]:
                            - generic [ref=e1344]:
                              - button [ref=e1346] [cursor=pointer]:
                                - img [ref=e1348]
                                - generic [ref=e1351]: Email
                              - button [ref=e1353] [cursor=pointer]:
                                - img [ref=e1355]
                                - generic [ref=e1358]: Call
                        - gridcell [ref=e1359]
      - list [ref=e1362]:
        - listitem [ref=e1363]:
          - button [ref=e1366] [cursor=pointer]:
            - img [ref=e1370]
            - generic [ref=e1373]: To Do List
    - dialog "New Lead" [ref=e1376]:
      - generic [ref=e1377]:
        - button "Cancel and close" [ref=e1378] [cursor=pointer]:
          - img [ref=e1380]
          - generic [ref=e1383]: Cancel and close
        - generic [ref=e1384]:
          - generic [ref=e1391]:
            - heading "New Lead" [level=2] [ref=e1393]
            - generic [ref=e1395]:
              - generic [ref=e1396]: "* = Required Information"
              - generic [ref=e1398]:
                - generic [ref=e1403]:
                  - generic [ref=e1405]:
                    - heading "Lead Information" [level=3] [ref=e1406]:
                      - generic [ref=e1407]: Lead Information
                    - list [ref=e1409]:
                      - generic [ref=e1410]:
                        - generic [ref=e1412]:
                          - listitem [ref=e1414]:
                            - generic [ref=e1415]:
                              - generic [ref=e1416]: Lead Owner
                              - generic [ref=e1428]: Carlos Ng
                          - listitem [ref=e1430]:
                            - button "Undo Phone" [ref=e1432] [cursor=pointer]:
                              - img [ref=e1434]
                            - generic [ref=e1441]:
                              - generic [ref=e1442]: Phone
                              - textbox "Phone" [ref=e1444]: "0236752725"
                        - generic [ref=e1446]:
                          - listitem [ref=e1448]:
                            - button "Undo Name" [ref=e1450] [cursor=pointer]:
                              - img [ref=e1452]
                            - group "Name required" [ref=e1459]:
                              - generic [ref=e1460]:
                                - text: "*Name"
                                - generic "required" [ref=e1461]
                              - generic [ref=e1463]:
                                - generic [ref=e1467]:
                                  - generic [ref=e1469]: Salutation
                                  - generic [ref=e1473]:
                                    - combobox "Salutation" [ref=e1474] [cursor=pointer]:
                                      - generic [ref=e1475]: "--None--"
                                    - img [ref=e1479]
                                  - status
                                - generic [ref=e1485]:
                                  - generic [ref=e1486]: First Name
                                  - textbox "First Name" [ref=e1488]: Pam
                                - generic [ref=e1492]:
                                  - generic [ref=e1493]: "*Last Name"
                                  - textbox "Last Name" [ref=e1495]: Boehm
                          - listitem [ref=e1497]:
                            - button "Undo Mobile" [ref=e1499] [cursor=pointer]:
                              - img [ref=e1501]
                            - generic [ref=e1508]:
                              - generic [ref=e1509]: Mobile
                              - textbox "Mobile" [ref=e1511]: "09166357694"
                        - generic [ref=e1513]:
                          - listitem [ref=e1515]:
                            - button "Undo Company" [ref=e1517] [cursor=pointer]:
                              - img [ref=e1519]
                            - generic [ref=e1527]:
                              - generic [ref=e1528]: "*Company"
                              - textbox "Company" [ref=e1530]: Murray Inc
                          - listitem [ref=e1532]:
                            - button "Undo Fax" [ref=e1534] [cursor=pointer]:
                              - img [ref=e1536]
                            - generic [ref=e1543]:
                              - generic [ref=e1544]: Fax
                              - textbox "Fax" [ref=e1546]: "6804605707"
                        - generic [ref=e1548]:
                          - listitem [ref=e1550]:
                            - button "Undo Title" [ref=e1552] [cursor=pointer]:
                              - img [ref=e1554]
                            - generic [ref=e1562]:
                              - generic [ref=e1563]: Title
                              - textbox "Title" [ref=e1565]: Future Mobility Assistant
                          - listitem [ref=e1567]:
                            - button "Undo Email" [ref=e1569] [cursor=pointer]:
                              - img [ref=e1571]
                            - generic [ref=e1578]:
                              - generic [ref=e1579]: Email
                              - textbox "Email" [active] [ref=e1581]: pam_boehm@hotmail.com
                        - generic [ref=e1583]:
                          - listitem [ref=e1585]:
                            - generic [ref=e1592]:
                              - generic [ref=e1594]: Lead Source
                              - generic [ref=e1598]:
                                - combobox "Lead Source" [ref=e1599] [cursor=pointer]:
                                  - generic [ref=e1600]: "--None--"
                                - img [ref=e1604]
                              - status
                          - listitem [ref=e1608]:
                            - generic [ref=e1613]:
                              - generic [ref=e1614]: Website
                              - textbox "Website" [ref=e1616]
                        - generic [ref=e1618]:
                          - listitem [ref=e1620]:
                            - generic [ref=e1627]:
                              - generic [ref=e1629]: Industry
                              - generic [ref=e1633]:
                                - combobox "Industry" [ref=e1634] [cursor=pointer]:
                                  - generic [ref=e1635]: "--None--"
                                - img [ref=e1639]
                              - status
                          - listitem [ref=e1643]:
                            - generic [ref=e1650]:
                              - generic [ref=e1652]: "*Lead Status"
                              - generic [ref=e1656]:
                                - combobox "Lead Status" [ref=e1657] [cursor=pointer]:
                                  - generic [ref=e1658]: Open - Not Contacted
                                - img [ref=e1662]
                              - status
                        - generic [ref=e1666]:
                          - listitem [ref=e1668]:
                            - button "Undo Annual Revenue" [ref=e1670] [cursor=pointer]:
                              - img [ref=e1672]
                            - generic [ref=e1680]:
                              - generic [ref=e1681]: Annual Revenue
                              - spinbutton "Annual Revenue" [ref=e1683]: $262
                          - listitem [ref=e1685]:
                            - generic [ref=e1692]:
                              - generic [ref=e1694]: Rating
                              - generic [ref=e1698]:
                                - combobox "Rating" [ref=e1699] [cursor=pointer]:
                                  - generic [ref=e1700]: "--None--"
                                - img [ref=e1704]
                              - status
                        - listitem [ref=e1711]:
                          - generic [ref=e1716]:
                            - generic [ref=e1717]: No. of Employees
                            - spinbutton "No. of Employees" [ref=e1719]
                  - generic [ref=e1721]:
                    - heading "Address Information" [level=3] [ref=e1722]:
                      - generic [ref=e1723]: Address Information
                    - list [ref=e1725]:
                      - listitem [ref=e1730]:
                        - group "Address" [ref=e1735]:
                          - generic [ref=e1736]: Address
                          - generic [ref=e1738]:
                            - generic [ref=e1742]:
                              - generic [ref=e1744]: Country
                              - generic [ref=e1748]:
                                - combobox "Country" [ref=e1751]: "--None--"
                                - img [ref=e1755]
                              - status
                            - generic [ref=e1759]:
                              - generic [ref=e1760]: Street
                              - textbox "Street" [ref=e1762]
                              - status
                            - generic [ref=e1763]:
                              - generic [ref=e1766]:
                                - generic [ref=e1767]: City
                                - textbox "City" [ref=e1769]
                              - generic [ref=e1772]:
                                - generic [ref=e1774]: State/Province
                                - generic [ref=e1778]:
                                  - combobox "State/Province" [ref=e1781]: "--None--"
                                  - img [ref=e1785]
                                - status
                            - generic [ref=e1791]:
                              - generic [ref=e1792]: Zip/Postal Code
                              - textbox "Zip/Postal Code" [ref=e1794]
                  - generic [ref=e1797]:
                    - heading "Additional Information" [level=3] [ref=e1798]:
                      - generic [ref=e1799]: Additional Information
                    - list [ref=e1801]:
                      - generic [ref=e1802]:
                        - generic [ref=e1804]:
                          - listitem [ref=e1806]:
                            - generic [ref=e1813]:
                              - generic [ref=e1815]: Product Interest
                              - generic [ref=e1819]:
                                - combobox "Product Interest" [ref=e1820] [cursor=pointer]:
                                  - generic [ref=e1821]: "--None--"
                                - img [ref=e1825]
                              - status
                          - listitem [ref=e1829]:
                            - generic [ref=e1835]:
                              - generic [ref=e1836]: Current Generator(s)
                              - textbox "Current Generator(s)" [ref=e1838]
                        - generic [ref=e1840]:
                          - listitem [ref=e1842]:
                            - generic [ref=e1848]:
                              - generic [ref=e1849]: SIC Code
                              - textbox "SIC Code" [ref=e1851]
                          - listitem [ref=e1853]:
                            - generic [ref=e1860]:
                              - generic [ref=e1862]: Primary
                              - generic [ref=e1866]:
                                - combobox "Primary" [ref=e1867] [cursor=pointer]:
                                  - generic [ref=e1868]: "--None--"
                                - img [ref=e1872]
                              - status
                        - listitem [ref=e1878]:
                          - generic [ref=e1883]:
                            - generic [ref=e1884]: Number of Locations
                            - spinbutton "Number of Locations" [ref=e1886]
                  - generic [ref=e1889]:
                    - heading "Description Information" [level=3] [ref=e1890]:
                      - generic [ref=e1891]: Description Information
                    - list [ref=e1893]:
                      - listitem [ref=e1898]:
                        - generic [ref=e1902]:
                          - generic [ref=e1903]: Description
                          - textbox "Description" [ref=e1905]
                          - status
                - generic [ref=e1910]:
                  - generic "Cancel" [ref=e1911]:
                    - button "Cancel" [ref=e1916] [cursor=pointer]
                  - generic "Save & New" [ref=e1917]:
                    - button "Save & New" [ref=e1922] [cursor=pointer]
                  - generic "Save" [ref=e1923]:
                    - button "Save" [ref=e1928] [cursor=pointer]
          - status [ref=e1929]
  - generic:
    - status
```

# Test source

```ts
  8   |   readonly page: Page;
  9   |   readonly h: Helper;
  10  | 
  11  |   textFieldGlobalSearchBar: Locator;
  12  |   buttonAppLauncher: Locator;
  13  |   buttonNew: Locator;
  14  |   dropdownSalutation: Locator;
  15  |   textFieldFirstName: Locator;
  16  |   textFieldLastName: Locator;
  17  |   textFieldCompany: Locator;
  18  |   textFieldTitle: Locator;
  19  |   dropdownLeadSource: Locator;
  20  |   dropdownIndustry: Locator;
  21  |   textFieldAnnualRevenue: Locator;
  22  |   textFieldPhone: Locator;
  23  |   textFieldMobile: Locator;
  24  |   textFieldFax: Locator;
  25  |   textFieldEmail: Locator;
  26  |   textFieldWebsite: Locator;
  27  |   dropdownLeadStatus: Locator;
  28  |   dropdownRating: Locator;
  29  |   textFieldNoOfEmployees: Locator;
  30  |   buttonSave: Locator;
  31  |   buttonShowMoreActions: Locator;
  32  |   buttonDelete: Locator;
  33  |   buttonDelete2: Locator;
  34  |   tabDetails: Locator;
  35  |   buttonEdit: Locator;
  36  |   buttonSaveAndNew: Locator;
  37  |   buttonConvertMenuItem: Locator;
  38  |   buttonConvert: Locator;
  39  |   buttonError: Locator;
  40  |   buttonClose: Locator;
  41  | 
  42  |   constructor(page: Page) {
  43  |     this.page = page;
  44  |     this.h = new Helper(this.page);
  45  | 
  46  |     this.textFieldGlobalSearchBar = this.page.getByRole("button", { name: "Search" });
  47  |     this.buttonAppLauncher = this.page.getByRole("button", { name: "App Launcher" });
  48  |     this.buttonNew = this.page.getByRole("button", { name: "New", exact: true });
  49  |     // this.buttonNew = this.page.locator("button[title='New'], a[title='New'], button:has-text('New')").first();
  50  |     this.dropdownSalutation = this.page.getByRole("combobox", { name: "Salutation" });
  51  |     this.textFieldFirstName = this.page.getByRole("textbox", { name: "First Name" });
  52  |     this.textFieldLastName = this.page.getByRole("textbox", { name: "Last Name" });
  53  |     this.textFieldCompany = this.page.getByRole("textbox", { name: "Company" });
  54  |     this.textFieldTitle = this.page.getByRole("textbox", { name: "Title" });
  55  |     this.dropdownLeadSource = this.page.getByRole("combobox", { name: "Lead Source" });
  56  |     this.dropdownIndustry = this.page.getByRole("combobox", { name: "Industry" });
  57  |     this.textFieldAnnualRevenue = this.page.getByRole("spinbutton", { name: "Annual Revenue" });
  58  |     this.textFieldPhone = this.page.getByRole("textbox", { name: "Phone" });
  59  |     this.textFieldMobile = this.page.getByRole("textbox", { name: "Mobile" });
  60  |     this.textFieldFax = this.page.getByRole("textbox", { name: "Fax" });
  61  |     this.textFieldEmail = this.page.getByRole("textbox", { name: "Email" });
  62  |     this.textFieldWebsite = this.page.getByRole("textbox", { name: "Website" });
  63  |     this.dropdownLeadStatus = this.page.getByRole("combobox", { name: "Lead Status" });
  64  |     this.dropdownRating = this.page.getByRole("combobox", { name: "Rating" });
  65  |     this.textFieldNoOfEmployees = this.page.getByRole("spinbutton", { name: "No. of Employees" });
  66  |     this.buttonSave = this.page.getByRole("button", { name: "Save", exact: true });
  67  |     this.buttonShowMoreActions = this.page.getByRole("button", { name: "Show more actions" });
  68  |     this.buttonDelete = this.page.getByRole("menuitem", { name: "Delete" });
  69  |     this.buttonDelete2 = this.page.locator(
  70  |       "//span[@dir='ltr' and contains(@class, 'label') and normalize-space(.)='Delete']"
  71  |     );
  72  |     this.tabDetails = this.page.getByRole("tab", { name: "Details" });
  73  |     this.buttonEdit = this.page.getByRole("menuitem", { name: "Edit" });
  74  |     this.buttonSaveAndNew = this.page.getByRole("button", { name: "Save & New" });
  75  |     this.buttonConvertMenuItem = this.page.getByRole("menuitem", { name: "Convert" });
  76  |     this.buttonConvert = this.page.getByRole("button", { name: "Convert" });
  77  |     this.buttonError = this.page.getByRole("button", { name: "Error" });
  78  |     this.buttonClose = this.page.locator(`button[title='Cancel and close']`);
  79  |   }
  80  | 
  81  |   async verifyDashboardPage() {
  82  |     await expect(this.textFieldGlobalSearchBar).toBeVisible();
  83  |     await expect(this.buttonAppLauncher).toBeVisible();
  84  |   }
  85  | 
  86  |   async goToSalesPage() {
  87  |     await this.page.goto(
  88  |       "https://orgfarm-b21abd5166-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome"
  89  |     );
  90  |     await this.page.waitForLoadState("domcontentloaded");
  91  |   }
  92  | 
  93  |   async clickNewButton() {
  94  |     await this.buttonNew.click({ timeout: 10000 });
  95  |     await expect(this.page.getByText("New Lead")).toBeVisible();
  96  |   }
  97  | 
  98  |   async fillLeadForm(lead: LeadData) {
  99  |     await this.textFieldFirstName.fill(lead.firstName);
  100 |     await this.textFieldLastName.fill(lead.lastName);
  101 |     await this.textFieldCompany.fill(lead.company);
  102 |     await this.textFieldTitle.fill(lead.title);
  103 |     await this.textFieldAnnualRevenue.fill(lead.annualRevenue);
  104 |     await this.textFieldPhone.fill(lead.phone);
  105 |     await this.textFieldMobile.fill(lead.mobile);
  106 |     await this.textFieldFax.fill(lead.fax);
  107 |     await this.textFieldEmail.fill(lead.email);
> 108 |     await this.textFieldWebsite.fill(lead.website);
      |                                 ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  109 |     await this.textFieldNoOfEmployees.fill(lead.numberOfEmployees);
  110 | 
  111 |     await this.fillLeadFormDropdownV2(lead);
  112 |   }
  113 | 
  114 |   async fillLeadTextField(field: Locator, value: string) {
  115 |     await field.fill(value);
  116 |   }
  117 | 
  118 |   async fillLeadFormDropdown(lead: LeadData) {
  119 |     await this.dropdownSalutation.click();
  120 |     await this.page.getByRole("option", { name: lead.salutation }).click();
  121 | 
  122 |     await this.dropdownLeadSource.click();
  123 |     await this.page.getByRole("option", { name: lead.leadSource }).click();
  124 | 
  125 |     await this.dropdownIndustry.click();
  126 |     await this.page.getByRole("option", { name: lead.industry, exact: true }).click();
  127 | 
  128 |     await this.dropdownLeadStatus.click();
  129 |     await this.page.getByRole("option", { name: lead.leadStatus }).click();
  130 | 
  131 |     await this.dropdownRating.click();
  132 |     await this.page.getByRole("option", { name: lead.rating }).click();
  133 |   }
  134 | 
  135 |   private async selectOption(dropdown: Locator, value: string, exact = false) {
  136 |     await dropdown.click();
  137 |     await this.page.getByRole("option", { name: value, exact }).click();
  138 |   }
  139 | 
  140 |   async fillLeadFormDropdownV2(lead: LeadData) {
  141 |     const dropdowns = [
  142 |       { locator: this.dropdownSalutation, value: lead.salutation },
  143 |       { locator: this.dropdownLeadSource, value: lead.leadSource },
  144 |       { locator: this.dropdownIndustry, value: lead.industry, exact: true },
  145 |       { locator: this.dropdownLeadStatus, value: lead.leadStatus },
  146 |       { locator: this.dropdownRating, value: lead.rating },
  147 |     ];
  148 | 
  149 |     for (const dropdown of dropdowns) {
  150 |       await this.selectOption(dropdown.locator, dropdown.value, dropdown.exact);
  151 |     }
  152 |   }
  153 | 
  154 |   async saveLead() {
  155 |     await this.buttonSave.click();
  156 |     await expect(this.page.getByText("was created.")).toBeVisible();
  157 |     await expect(this.page).toHaveURL(this.leadRecordUrl, {
  158 |       timeout: 10000,
  159 |     });
  160 |   }
  161 | 
  162 |   async clickSaveButton() {
  163 |     await this.buttonSave.click();
  164 |   }
  165 | 
  166 |   async verifyUniqueLeadId() {
  167 |     const match = this.page.url().match(this.leadRecordUrl);
  168 |     expect(match).not.toBeNull();
  169 |     expect(match![1]).toHaveLength(18);
  170 |     expect(match![1]).toMatch(/^[A-Za-z0-9]{18}$/);
  171 |   }
  172 | 
  173 |   async deleteLead() {
  174 |     await this.buttonShowMoreActions.click();
  175 |     await this.buttonDelete.click();
  176 |     await expect(this.page.getByText("Are you sure you want to delete this")).toBeVisible();
  177 |     await this.buttonDelete2.click();
  178 |     await expect(this.page.getByText("was deleted.")).toBeVisible();
  179 |   }
  180 | 
  181 |   async editLead() {
  182 |     await this.buttonShowMoreActions.click();
  183 |     await this.buttonEdit.click();
  184 |     await expect(this.buttonSaveAndNew).toBeVisible();
  185 |     await expect(this.buttonSave).toBeVisible();
  186 |   }
  187 | 
  188 |   async clickConvertButton() {
  189 |     await this.buttonShowMoreActions.click();
  190 |     await expect(this.buttonConvertMenuItem).toBeVisible({ timeout: 10000 });
  191 |     await this.buttonConvertMenuItem.click();
  192 |     await expect(this.page.getByRole("dialog", { name: "Convert Lead" })).toBeVisible({
  193 |       timeout: 15000,
  194 |     });
  195 |   }
  196 | 
  197 |   async editLeadStatus(newStatus: string) {
  198 |     await this.buttonShowMoreActions.click();
  199 |     await this.buttonEdit.click();
  200 |     await expect(this.dropdownLeadStatus).toBeVisible({ timeout: 10000 });
  201 |     await this.selectOption(this.dropdownLeadStatus, newStatus);
  202 |     await this.buttonSave.click();
  203 |     await expect(this.page.getByText("was saved.")).toBeVisible();
  204 |     await expect(this.page).toHaveURL(this.leadRecordUrl, {
  205 |       timeout: 10000,
  206 |     });
  207 |   }
  208 | 
```