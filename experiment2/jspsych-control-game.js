/*
 * Control Game
 */

jsPsych.plugins["control-game"] = (function() {

  var plugin = {};

  plugin.info = {
    name: "control-game",
    parameters: {
      decrease_key: {
        type: jsPsych.plugins.parameterType.KEYCODE, // BOOL, STRING, INT, FLOAT, FUNCTION, KEY, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
        default: 37 // <-
      },
      increase_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        default: 39 // ->
      },
      insulin_curve: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: [-0.00000000e+00, -1.27778950e-02, -3.79222152e-02, -7.50314754e-02,
          -1.23713958e-01, -1.83587503e-01, -2.54279297e-01, -3.35425673e-01,
          -4.26671910e-01, -5.27672036e-01, -6.38088642e-01, -7.57592688e-01,
          -8.85863325e-01, -1.02258771e+00, -1.16746085e+00, -1.32018538e+00,
          -1.48047147e+00, -1.64803657e+00, -1.82260534e+00, -2.00390941e+00,
          -2.19168729e+00, -2.38568418e+00, -2.58565182e+00, -2.79134837e+00,
          -3.00253824e+00, -3.21899197e+00, -3.44048607e+00, -3.66680294e+00,
          -3.89773065e+00, -4.13306290e+00, -4.37259883e+00, -4.61614293e+00,
          -4.86350492e+00, -5.11449962e+00, -5.36894683e+00, -5.62667122e+00,
          -5.88750225e+00, -6.15127399e+00, -6.41782511e+00, -6.68699869e+00,
          -6.95864216e+00, -7.23260720e+00, -7.50874962e+00, -7.78692929e+00,
          -8.06701004e+00, -8.34885957e+00, -8.63234932e+00, -8.91735446e+00,
          -9.20375374e+00, -9.49142942e+00, -9.78026721e+00, -1.00701562e+01,
          -1.03609886e+01, -1.06526601e+01, -1.09450693e+01, -1.12381179e+01,
          -1.15317106e+01, -1.18257549e+01, -1.21201614e+01, -1.24148431e+01,
          -1.27097159e+01, -1.30046985e+01, -1.32997119e+01, -1.35946798e+01,
          -1.38895282e+01, -1.41841855e+01, -1.44785826e+01, -1.47726526e+01,
          -1.50663307e+01, -1.53595545e+01, -1.56522634e+01, -1.59443992e+01,
          -1.62359054e+01, -1.65267278e+01, -1.68168138e+01, -1.71061127e+01,
          -1.73945759e+01, -1.76821563e+01, -1.79688086e+01, -1.82544892e+01,
          -1.85391562e+01, -1.88227691e+01, -1.91052891e+01, -1.93866790e+01,
          -1.96669030e+01, -1.99459266e+01, -2.02237170e+01, -2.05002425e+01,
          -2.07754728e+01, -2.10493791e+01, -2.13219335e+01, -2.15931097e+01,
          -2.18628824e+01, -2.21312274e+01, -2.23981218e+01, -2.26635437e+01,
          -2.29274723e+01, -2.31898879e+01, -2.34507717e+01, -2.37101061e+01,
          -2.39678742e+01, -2.42240601e+01, -2.44786491e+01, -2.47316269e+01,
          -2.49829805e+01, -2.52326975e+01, -2.54807663e+01, -2.57271763e+01,
          -2.59719173e+01, -2.62149803e+01, -2.64563566e+01, -2.66960386e+01,
          -2.69340190e+01, -2.71702913e+01, -2.74048499e+01, -2.76376894e+01,
          -2.78688053e+01, -2.80981937e+01, -2.83258509e+01, -2.85517743e+01,
          -2.87759614e+01, -2.89984104e+01, -2.92191199e+01, -2.94380892e+01,
          -2.96553179e+01, -2.98708061e+01, -3.00845542e+01, -3.02965633e+01,
          -3.05068348e+01, -3.07153703e+01, -3.09221721e+01, -3.11272428e+01,
          -3.13305851e+01, -3.15322023e+01, -3.17320981e+01, -3.19302764e+01,
          -3.21267412e+01, -3.23214973e+01, -3.25145494e+01, -3.27059026e+01,
          -3.28955622e+01, -3.30835339e+01, -3.32698237e+01, -3.34544375e+01,
          -3.36373818e+01, -3.38186632e+01, -3.39982884e+01, -3.41762644e+01,
          -3.43525985e+01, -3.45272981e+01, -3.47003706e+01, -3.48718239e+01,
          -3.50416659e+01, -3.52099046e+01, -3.53765482e+01, -3.55416052e+01,
          -3.57050840e+01, -3.58669933e+01, -3.60273418e+01, -3.61861384e+01,
          -3.63433921e+01, -3.64991120e+01, -3.66533074e+01, -3.68059874e+01,
          -3.69571616e+01, -3.71068393e+01, -3.72550301e+01, -3.74017437e+01,
          -3.75469897e+01, -3.76907780e+01, -3.78331182e+01, -3.79740204e+01,
          -3.81134944e+01, -3.82515503e+01, -3.83881980e+01, -3.85234476e+01,
          -3.86573092e+01, -3.87897930e+01, -3.89209091e+01, -3.90506676e+01,
          -3.91790789e+01, -3.93061530e+01, -3.94319003e+01, -3.95563311e+01,
          -3.96794554e+01, -3.98012837e+01, -3.99218263e+01, -4.00410932e+01,
          -4.01590950e+01, -4.02758417e+01, -4.03913437e+01, -4.05056111e+01,
          -4.06186544e+01, -4.07304835e+01, -4.08411089e+01, -4.09505406e+01,
          -4.10587888e+01, -4.11658637e+01, -4.12717753e+01, -4.13765338e+01,
          -4.14801493e+01, -4.15826317e+01, -4.16839912e+01, -4.17842375e+01,
          -4.18833808e+01, -4.19814308e+01, -4.20783975e+01, -4.21742907e+01,
          -4.22691202e+01, -4.23628957e+01, -4.24556269e+01, -4.25473235e+01,
          -4.26379951e+01, -4.27276512e+01, -4.28163015e+01, -4.29039554e+01,
          -4.29906223e+01, -4.30763115e+01, -4.31610325e+01, -4.32447945e+01,
          -4.33276068e+01, -4.34094784e+01, -4.34904186e+01, -4.35704364e+01,
          -4.36495408e+01, -4.37277408e+01, -4.38050453e+01, -4.38814632e+01,
          -4.39570032e+01, -4.40316741e+01, -4.41054845e+01, -4.41784431e+01,
          -4.42505585e+01, -4.43218392e+01, -4.43922936e+01, -4.44619300e+01,
          -4.45307569e+01, -4.45987826e+01, -4.46660151e+01, -4.47324627e+01,
          -4.47981335e+01, -4.48630355e+01, -4.49271766e+01, -4.49905649e+01,
          -4.50532081e+01, -4.51151140e+01, -4.51762904e+01, -4.52367450e+01,
          -4.52964853e+01, -4.53555189e+01, -4.54138532e+01, -4.54714958e+01,
          -4.55284540e+01, -4.55847351e+01, -4.56403463e+01, -4.56952949e+01,
          -4.57495879e+01, -4.58032324e+01, -4.58562354e+01, -4.59086040e+01,
          -4.59603449e+01, -4.60114649e+01, -4.60619710e+01, -4.61118697e+01,
          -4.61611677e+01, -4.62098717e+01, -4.62579880e+01, -4.63055233e+01,
          -4.63524839e+01, -4.63988762e+01, -4.64447065e+01, -4.64899810e+01,
          -4.65347060e+01, -4.65788874e+01, -4.66225315e+01, -4.66656442e+01,
          -4.67082315e+01, -4.67502992e+01, -4.67918533e+01, -4.68328995e+01,
          -4.68734435e+01, -4.69134911e+01, -4.69530479e+01, -4.69921193e+01,
          -4.70307110e+01, -4.70688285e+01, -4.71064770e+01, -4.71436620e+01,
          -4.71803888e+01, -4.72166627e+01, -4.72524887e+01, -4.72878722e+01,
          -4.73228181e+01, -4.73573316e+01, -4.73914176e+01, -4.74250810e+01,
          -4.74583268e+01, -4.74911598e+01, -4.75235849e+01, -4.75556066e+01,
          -4.75872298e+01, -4.76184592e+01, -4.76492992e+01, -4.76797545e+01,
          -4.77098295e+01, -4.77395288e+01, -4.77688567e+01, -4.77978176e+01,
          -4.78264159e+01, -4.78546557e+01, -4.78825415e+01, -4.79100772e+01,
          -4.79372671e+01, -4.79641153e+01, -4.79906258e+01, -4.80168026e+01,
          -4.80426497e+01, -4.80681711e+01, -4.80933706e+01, -4.81182521e+01,
          -4.81428193e+01, -4.81670761e+01, -4.81910261e+01, -4.82146730e+01,
          -4.82380204e+01, -4.82610721e+01, -4.82838314e+01, -4.83063020e+01,
          -4.83284873e+01, -4.83503908e+01, -4.83720159e+01, -4.83933659e+01,
          -4.84144441e+01, -4.84352540e+01, -4.84557986e+01, -4.84760813e+01,
          -4.84961052e+01, -4.85158735e+01, -4.85353893e+01, -4.85546557e+01,
          -4.85736757e+01, -4.85924523e+01, -4.86109885e+01, -4.86292872e+01,
          -4.86473514e+01, -4.86651839e+01, -4.86827876e+01, -4.87001653e+01,
          -4.87173198e+01, -4.87342537e+01, -4.87509699e+01, -4.87674710e+01,
          -4.87837597e+01, -4.87998386e+01, -4.88157102e+01, -4.88313772e+01,
          -4.88468421e+01, -4.88621073e+01, -4.88771755e+01, -4.88920489e+01,
          -4.89067300e+01, -4.89212213e+01, -4.89355251e+01, -4.89496436e+01,
          -4.89635793e+01, -4.89773344e+01, -4.89909112e+01, -4.90043118e+01,
          -4.90175385e+01, -4.90305935e+01, -4.90434789e+01, -4.90561968e+01,
          -4.90687494e+01, -4.90811387e+01, -4.90933667e+01, -4.91054356e+01,
          -4.91173472e+01, -4.91291036e+01, -4.91407067e+01, -4.91521584e+01,
          -4.91634608e+01, -4.91746155e+01, -4.91856246e+01, -4.91964898e+01,
          -4.92072130e+01, -4.92177960e+01, -4.92282405e+01, -4.92385483e+01,
          -4.92487211e+01, -4.92587607e+01, -4.92686687e+01, -4.92784468e+01,
          -4.92880967e+01, -4.92976199e+01, -4.93070181e+01, -4.93162930e+01,
          -4.93254460e+01, -4.93344787e+01, -4.93433926e+01, -4.93521893e+01,
          -4.93608703e+01, -4.93694370e+01, -4.93778909e+01, -4.93862334e+01,
          -4.93944660e+01, -4.94025901e+01, -4.94106071e+01, -4.94185183e+01,
          -4.94263251e+01, -4.94340288e+01, -4.94416308e+01, -4.94491323e+01,
          -4.94565348e+01, -4.94638393e+01, -4.94710473e+01, -4.94781598e+01,
          -4.94851783e+01, -4.94921038e+01, -4.94989376e+01, -4.95056809e+01,
          -4.95123348e+01, -4.95189005e+01, -4.95253791e+01, -4.95317718e+01,
          -4.95380796e+01, -4.95443037e+01, -4.95504452e+01, -4.95565051e+01,
          -4.95624844e+01, -4.95683843e+01, -4.95742057e+01, -4.95799496e+01,
          -4.95856172e+01, -4.95912093e+01, -4.95967270e+01, -4.96021712e+01,
          -4.96075428e+01, -4.96128429e+01, -4.96180723e+01, -4.96232320e+01,
          -4.96283229e+01, -4.96333459e+01, -4.96383018e+01, -4.96431916e+01,
          -4.96480160e+01, -4.96527760e+01, -4.96574724e+01, -4.96621061e+01,
          -4.96666778e+01, -4.96711883e+01, -4.96756385e+01, -4.96800292e+01,
          -4.96843611e+01, -4.96886350e+01, -4.96928516e+01, -4.96970118e+01,
          -4.97011162e+01, -4.97051656e+01, -4.97091608e+01, -4.97131023e+01,
          -4.97169910e+01, -4.97208275e+01, -4.97246125e+01, -4.97283467e+01,
          -4.97320307e+01, -4.97356653e+01, -4.97392510e+01, -4.97427885e+01,
          -4.97462785e+01, -4.97497216e+01, -4.97531183e+01, -4.97564694e+01,
          -4.97597753e+01, -4.97630368e+01, -4.97662544e+01, -4.97694286e+01,
          -4.97725601e+01, -4.97756494e+01, -4.97786970e+01, -4.97817036e+01]
      },
      carb_curve: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: [-0.        , -0.        , -0.        , -0.        , -0.        ,
          -0.        , -0.        , -0.        , -0.        , -0.        ,
          -0.        , -0.        , -0.        , -0.        , -0.        ,
          -0.        , -0.        , -0.        , -0.        , -0.        ,
           0.        ,  1.4116988 ,  2.79018271,  4.13623322,  5.45061343,
           6.73406849,  7.98732601,  9.21109651, 10.40607374, 11.57293518,
          12.71234234, 13.82494116, 14.91136242, 15.97222201, 17.00812137,
          18.01964776, 19.00737464, 19.97186197, 20.91365655, 21.83329228,
          22.73129054, 23.60816042, 24.46439902, 25.30049178, 26.11691268,
          26.91412458, 27.69257942, 28.45271853, 29.19497286, 29.91976319,
          30.62750043, 31.3185858 , 31.9934111 , 32.6523589 , 33.29580277,
          33.92410749, 34.53762926, 35.1367159 , 35.72170704, 36.29293432,
          36.85072159, 37.39538507, 37.92723353, 38.4465685 , 38.95368439,
          39.44886869, 39.93240215, 40.40455888, 40.86560656, 41.31580657,
          41.75541412, 42.18467846, 42.60384292, 43.01314516, 43.4128172 ,
          43.80308564, 44.18417171, 44.55629148, 44.91965589, 45.27447095,
          45.62093781, 45.95925289, 46.28960799, 46.61219039, 46.92718297,
          47.23476431, 47.53510877, 47.82838664, 48.11476417, 48.39440372,
          48.66746383, 48.93409929, 49.19446127, 49.44869737, 49.69695173,
          49.93936507, 50.17607485, 50.40721524, 50.63291728, 50.85330894,
          51.06851515, 51.27865793, 51.4838564 , 51.68422689, 51.87988301,
          52.07093566, 52.25749317, 52.4396613 , 52.61754332, 52.79124007,
          52.96085003, 53.12646936, 53.28819194, 53.44610947, 53.60031146,
          53.75088533, 53.89791646, 54.0414882 , 54.18168193, 54.31857714,
          54.45225144, 54.5827806 , 54.71023864, 54.8346978 , 54.95622865,
          55.07490008, 55.19077938, 55.30393223, 55.41442278, 55.52231368,
          55.62766609, 55.73053973, 55.83099293, 55.92908263, 56.02486445,
          56.11839269, 56.20972036, 56.29889925, 56.3859799 , 56.4710117 ,
          56.55404284, 56.6351204 , 56.71429035, 56.79159755, 56.86708585,
          56.94079804, 57.0127759 , 57.08306024, 57.15169092, 57.21870682,
          57.28414596, 57.34804543, 57.41044144, 57.47136939, 57.5308638 ,
          57.58895841, 57.64568615, 57.70107919, 57.75516892, 57.80798601,
          57.8595604 , 57.90992133, 57.95909736, 58.00711636, 58.05400555,
          58.09979151, 58.14450021, 58.18815699, 58.2307866 , 58.27241321,
          58.31306042, 58.35275126, 58.39150824, 58.42935334, 58.46630801,
          58.50239319, 58.53762936, 58.57203647, 58.60563404, 58.63844112,
          58.67047631, 58.70175776, 58.73230321, 58.76212997, 58.79125497,
          58.8196947 , 58.84746529, 58.87458249, 58.90106167, 58.92691783,
          58.95216565, 58.97681942, 59.00089313, 59.02440043, 59.04735465,
          59.06976878, 59.09165556, 59.11302737, 59.13389634, 59.1542743 ,
          59.1741728 , 59.19360312, 59.21257628, 59.23110303, 59.24919388,
          59.26685908, 59.28410865, 59.30095236, 59.31739978, 59.33346021,
          59.34914276, 59.36445634, 59.37940961, 59.39401105, 59.40826895,
          59.42219138, 59.43578625, 59.44906124, 59.4620239 , 59.47468157,
          59.48704143, 59.49911048, 59.51089557, 59.52240337, 59.53364041,
          59.54461307, 59.55532755, 59.56578995, 59.57600618, 59.58598204,
          59.59572318, 59.60523513, 59.61452328, 59.6235929 , 59.63244912,
          59.64109698, 59.64954136, 59.65778706, 59.66583875, 59.673701  ,
          59.68137827, 59.6888749 , 59.69619515, 59.70334317, 59.710323  ,
          59.71713861, 59.72379386, 59.73029253, 59.73663829, 59.74283475,
          59.74888541, 59.75479371, 59.760563  , 59.76619655, 59.77169755,
          59.77706912, 59.78231431, 59.78743609, 59.79243736, 59.79732096,
          59.80208965, 59.80674615, 59.81129309, 59.81573304, 59.82006853,
          59.82430202, 59.8284359 , 59.83247251, 59.83641415, 59.84026305,
          59.84402139, 59.8476913 , 59.85127487, 59.85477412, 59.85819104,
          59.86152757, 59.86478559, 59.86796696, 59.87107347, 59.87410689,
          59.87706895, 59.87996131, 59.88278562, 59.88554347, 59.88823644,
          59.89086605, 59.89343379, 59.89594111, 59.89838944, 59.90078017,
          59.90311464, 59.90539419, 59.90762011, 59.90979365, 59.91191605,
          59.91398852, 59.91601222, 59.91798831, 59.91991791, 59.92180211,
          59.92364197, 59.92543855, 59.92719285, 59.92890588, 59.93057861,
          59.93221198, 59.93380691, 59.93536432, 59.93688509, 59.93837008,
          59.93982013, 59.94123606, 59.94261868, 59.94396876, 59.94528708,
          59.94657438, 59.9478314 , 59.94905884, 59.9502574 , 59.95142776,
          59.95257058, 59.95368651, 59.95477619, 59.95584023, 59.95687924,
          59.9578938 , 59.95888448, 59.95985186, 59.96079648, 59.96171887,
          59.96261956, 59.96349906, 59.96435787, 59.96519647, 59.96601534,
          59.96681494, 59.96759573, 59.96835814, 59.96910262, 59.96982959,
          59.97053945, 59.9712326 , 59.97190945, 59.97257037, 59.97321575,
          59.97384594, 59.9744613 , 59.97506218, 59.97564892, 59.97622186,
          59.97678132, 59.97732762, 59.97786106, 59.97838195, 59.97889059,
          59.97938726, 59.97987224, 59.98034581, 59.98080824, 59.98125979,
          59.98170072, 59.98213127, 59.98255169, 59.98296222, 59.98336309,
          59.98375453, 59.98413676, 59.98450999, 59.98487445, 59.98523033,
          59.98557783, 59.98591716, 59.98624851, 59.98657206, 59.98688799,
          59.9871965 , 59.98749774, 59.9877919 , 59.98807913, 59.98835961,
          59.98863349, 59.98890093, 59.98916207, 59.98941707, 59.98966606,
          59.9899092 , 59.99014662, 59.99037846, 59.99060484, 59.99082589,
          59.99104174, 59.99125251, 59.99145833, 59.9916593 , 59.99185554,
          59.99204717, 59.99223428, 59.992417  , 59.99259541, 59.99276963,
          59.99293975, 59.99310586, 59.99326807, 59.99342646, 59.99358113,
          59.99373215, 59.99387962, 59.99402363, 59.99416424, 59.99430155,
          59.99443562, 59.99456654, 59.99469438, 59.99481921, 59.99494111,
          59.99506014, 59.99517636, 59.99528985, 59.99540068, 59.99550889,
          59.99561456, 59.99571774, 59.99581849, 59.99591688, 59.99601295,
          59.99610676, 59.99619836, 59.9962878 , 59.99637515, 59.99646043,
          59.99654371, 59.99662503, 59.99670444, 59.99678198, 59.99685769,
          59.99693163, 59.99700382, 59.99707432, 59.99714315, 59.99721037,
          59.997276  , 59.9973401 , 59.99740268, 59.99746379, 59.99752346,
          59.99758173, 59.99763863, 59.99769419, 59.99774844, 59.99780141,
          59.99785314, 59.99790366, 59.99795298, 59.99800114, 59.99804817,
          59.99809409, 59.99813894, 59.99818273, 59.99822548, 59.99826723,
          59.998308  , 59.99834781, 59.99838669, 59.99842464, 59.99846171,
          59.9984979 , 59.99853325, 59.99856776, 59.99860145, 59.99863436,
          59.99866649, 59.99869787, 59.9987285 , 59.99875842, 59.99878763,
          59.99881616, 59.99884401, 59.99887121, 59.99889777, 59.9989237 ]
      },
      events: {
        type: jsPsych.plugins.parameterType.OBJECT,
        // Event architecture {type: 'lo/hi',factor: #,stretch:#}
        default: [{type:'lo',factor:2,time:0},{type:'lo',factor:0.5,time:20},
        {type:'hi',factor:5,time:30},{type:'hi',factor:5/4,time:50},]
      }
    }
  }

  plugin.trial = function(display_element, trial) {
    
    // Pre-Load
    var t = 0;
    var ir = 0;
    var tir = 100;
    const low_thresh = 80;
    const hi_thresh = 150;
    const trial_time = 1000*75;
    var numEvents = trial.events.length;

    // data saving
    var trial_data = {
      timeInRange: ir/t,
    };
    var rt = [];
    var keys = [];
    var events = [];
    
    // Data Structure
    var bg_array = new Array(480);
    bg_array.fill(90);
    var l = bg_array.length;
    for (let i = 1; i < l; i++) {
      bg_array[i] = Math.round(jStat.normal.sample(bg_array[i-1],1));
    }
    var current_bg = bg_array[0];
    
    // Dot color code
    var color_scale = ["#ff6666","#ccccff","#ffff99", "#000000"];
    function getColor(bg) {
      if (bg < low_thresh){
        return color_scale[0];
      }
      else if (bg < hi_thresh) {
        return color_scale[1];
      }
      else {
        return color_scale[2];
      }
    }

    function updateGraphics() {
      circle_color = getColor(current_bg);
      if (t > 0) {
        tir = Math.round(100 * (ir/t),2);
      }
      display_element.querySelector("#circle").style.width = `${current_bg}px`;
      display_element.querySelector("#circle").style.height = `${current_bg}px`;
      display_element.querySelector("#circle").style.background = circle_color;
      display_element.querySelector("#score").innerHTML = `Keep the circle blue!<br><- to shrink || -> to grow`;
    }

    function updateModel() {
      // Take out 1st element
      bg_array.shift(bg_array[0])
      // // Sample next point
      bg_array.push(Math.round(jStat.normal.sample(bg_array[478],1)))
      // // Update global BG
      current_bg = bg_array[0];
      console.log(current_bg)
    }
    
    function updateScore() {
      if (bg_array[0] > low_thresh & bg_array[0] < hi_thresh) {
        ir += 0.25;
      }
    }

    // Game functions
    function updateCarb(x)	{
      for (let i = 0; i < 480; i++) {
        bg_array[i] = Math.round(bg_array[i] + trial.carb_curve[i]*x);
        if (bg_array[i] > 500) {
          bg_array[i] = 500;
        }
      }
    }
    
    function updateInsulin(x) {
      for (let i = 0; i < 480; i++) {
        bg_array[i] = Math.round(bg_array[i] + trial.insulin_curve[i]*x);
        if (bg_array[i] < 10) {
          bg_array[i] = 10;
        }
      }
    }

    // create var event here to clear timout later
    function runEvent(i) {
      if (trial.events[i].type == 'lo') {
        updateInsulin(trial.events[i].factor);
      }
      else if (trial.events[i].type == 'hi') {
        updateCarb(trial.events[i].factor);
      }
    }

    function create_control_game() {
      updateGraphics();
      updateModel();
      updateScore();
    }

    var game;

    function show_stimulus(){
      var circle_color = getColor(100);
      display_element.innerHTML = '<div class="container-fluid" style="height: 700px"> <div class="row align-items-end"> <div class="col"> <h3 id = "score"> </h3> </div> </div> <div class="row align-items-center" style="height:300px"> <div class="col align-self-center"> <svg id="circle"> </svg> </div> </div> </div>';
      display_element.querySelector("#circle").style.width = "100px";
      display_element.querySelector("#circle").style.height = "100px";
      display_element.querySelector("#circle").style.background = circle_color;
      display_element.querySelector("#score").innerHTML = `100% in range`;

      // <div class="row align-items-center">
      //   <div class="col" id = "reminder">
      //   </div>
      // </div>

      // for remembering keyboard response and turning off at end
      // var keyboardListener = 
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.increase_key,trial.decrease_key],
        rt_method: 'performance',
        persist: true,
        allow_held_key: false
      });

      game = setInterval(function() {
        create_control_game();
        for (let i = 0; i < trial.events.length; i++) {
          if (t == trial.events[i].time) {
            runEvent(i);
            numEvents --;
            console.log(numEvents);
          }
        }
        if (t == (trial_time/1000)) {
          end_trial();
        }
        t += 0.25;
      }, 250);
    }

    function after_response(response_info){
      rt.push(response_info.rt);
      keys.push(response_info.key);


      if (response_info.key == "arrowleft") {
        updateInsulin(1);
      }
      if (response_info.key == "arrowright") {
        updateCarb(1);
      }
    }

    function end_trial(){
      trial_data.rt = JSON.stringify(rt);
      trial_data.keys = JSON.stringify(keys);
      trial_data.events = JSON.stringify(trial.events);
      jsPsych.pluginAPI.cancelAllKeyboardResponses();
      clearInterval(game);

      // end trial
      jsPsych.finishTrial(trial_data);
    }

    show_stimulus();
  };

  return plugin;
})();
