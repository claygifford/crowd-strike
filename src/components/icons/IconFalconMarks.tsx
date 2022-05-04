import "./IconFalconMarks.css";

function IconFalconMarks(props: any) {
  return (
    <svg style={{
        width: "200px",
        fill: '#ea3d27',
        transform: props.position === "right" ? "scalex(-1)" : undefined,
      }} viewBox="0 0 744.09448819 1052.3622047">
      <g>
        <path className="falcon-marks"
          d="m 418.14465,942.61704 c -3.70386,-3.43016 -13.20025,-14.04892 -16.20331,-18.11846 -0.81917,-1.10993 -3.30082,-4.63059 -5.51476,-7.82352 -2.21395,-3.19308 -5.13805,-7.1189 -6.49805,-8.72409 -1.36001,-1.6052 -2.47263,-3.30958 -2.47263,-3.78745 0,-0.47781 -1.04258,-2.30811 -2.31687,-4.06719 -1.27438,-1.75914 -3.33251,-5.06758 -4.57374,-7.35214 -1.24123,-2.28457 -3.15871,-5.49044 -4.26101,-7.12423 -1.10239,-1.6338 -2.71352,-4.58524 -3.58046,-6.55887 -0.86686,-1.97354 -3.08666,-6.01176 -4.93291,-8.9739 -1.84615,-2.96206 -3.3567,-5.78481 -3.3567,-6.27272 0,-1.16186 -4.34096,-9.74773 -5.52906,-10.9358 -0.50712,-0.50714 -1.32207,-2.03659 -1.81106,-3.3988 -0.48901,-1.3623 -2.54648,-5.70529 -4.57211,-9.6512 -2.0257,-3.9459 -3.68307,-7.63702 -3.68307,-8.20253 0,-0.56552 -2.00507,-4.92626 -4.45576,-9.69048 -2.45068,-4.7642 -4.45583,-9.08989 -4.45583,-9.61271 0,-0.52275 -1.48138,-3.96172 -3.29196,-7.64207 -1.81058,-3.68042 -5.71089,-12.0386 -8.66732,-18.57378 -2.95642,-6.53517 -5.99775,-12.78495 -6.7585,-13.88844 -0.76076,-1.1034 -2.20282,-3.85953 -3.20455,-6.12464 -2.26976,-5.13219 -10.71982,-18.05423 -13.21901,-20.2147 -1.0248,-0.88596 -2.56029,-1.9838 -3.41204,-2.43969 -0.92682,-0.49601 -1.54882,-1.56391 -1.54882,-2.6593 0,-1.08647 -0.42879,-1.83044 -1.05485,-1.83044 -0.58934,0 -1.28283,-1.06547 -1.57107,-2.41357 -0.28386,-1.32745 -0.75727,-2.74774 -1.05202,-3.15618 -0.29474,-0.40845 -1.29542,-2.82046 -2.22369,-5.35989 -1.06104,-2.90303 -2.20884,-4.7827 -3.09138,-5.06283 -0.77212,-0.24506 -1.40379,-0.74211 -1.40379,-1.10451 0,-0.36241 -1.16965,-0.87832 -2.59928,-1.14656 -1.42955,-0.26816 -2.59921,-0.63814 -2.59921,-0.82209 0,-0.18395 1.20175,-2.79884 2.67046,-5.81089 l 2.67045,-5.47646 -2.672,-4.02559 c -2.76014,-4.1583 -6.72885,-7.95153 -8.31934,-7.95153 -0.49965,0 -1.96048,-1.32835 -3.24638,-2.95189 -2.64137,-3.3351 -12.13492,-21.54095 -12.93418,-24.80431 -0.28769,-1.17446 -1.8707,-4.9457 -3.51798,-8.38069 -2.20429,-4.59666 -2.99201,-7.16956 -2.9843,-9.74673 0.013,-4.30895 -0.37469,-4.91703 -8.27287,-12.97694 -5.46155,-5.57331 -7.77688,-8.66868 -12.06529,-16.12973 -0.42442,-0.73839 -1.19785,-1.8561 -1.71893,-2.48383 -0.52093,-0.62774 -0.84201,-2.40638 -0.71356,-3.95254 0.19311,-2.32429 0.77238,-3.20154 3.34436,-5.06461 3.50652,-2.54003 3.63252,-2.89481 2.08306,-5.86579 -1.44887,-2.77799 -1.40233,-3.24953 0.37591,-3.81393 2.27488,-0.72201 1.79758,-2.40493 -1.82478,-6.43385 -1.8205,-2.02484 -3.72572,-4.83097 -4.23365,-6.23584 -0.50801,-1.40486 -1.10718,-2.55429 -1.33149,-2.55429 -0.22423,0 -0.44261,-0.75192 -0.48519,-1.67093 -0.0626,-1.34862 -3.03628,-18.48254 -4.44543,-25.6131 -0.21148,-1.07025 -2.24377,-2.90661 -5.70049,-5.15101 -12.3416,-8.01306 -25.61675,-20.44249 -29.19047,-27.3308 -0.62946,-1.21323 -1.84006,-3.33136 -2.69019,-4.70697 -2.21622,-3.5859 -4.31058,-12.24427 -4.31058,-17.82056 0,-4.23765 0.28346,-5.18338 2.46303,-8.21919 2.37945,-3.31421 4.22065,-7.43812 4.22065,-9.45354 0,-0.53583 -1.5038,-2.82054 -3.34184,-5.07713 -3.53236,-4.33682 -4.24405,-7.25831 -2.06511,-8.47769 2.58255,-1.4453 9.21578,4.17331 10.19606,8.6365 0.2616,1.1908 1.37966,3.19859 2.48473,4.46173 1.76516,2.01781 2.2345,2.20081 3.86569,1.50731 1.02115,-0.43413 2.84221,-0.91775 4.04687,-1.07467 1.20458,-0.15694 2.40373,-0.63092 2.66476,-1.0533 0.26104,-0.42237 1.44767,-0.88106 2.6369,-1.01932 1.18932,-0.13826 2.41291,-0.28948 2.71928,-0.33606 0.30629,-0.0466 0.557,-0.39515 0.557,-0.77465 0,-0.37949 -1.75452,-1.06579 -3.89884,-1.52513 -3.65927,-0.78382 -4.04711,-1.09027 -6.3124,-4.98641 -2.82538,-4.85954 -2.90582,-5.49022 -0.92829,-7.27982 0.8169,-0.73929 1.48529,-1.58579 1.48529,-1.88114 0,-0.29535 -1.99484,-1.28299 -4.43293,-2.19478 -2.43811,-0.91179 -4.81828,-2.12219 -5.28932,-2.68977 -0.47113,-0.56758 -1.14325,-1.03196 -1.49374,-1.03196 -1.10497,0 -9.16216,-5.39323 -10.17687,-6.81205 -1.20175,-1.68046 -2.23174,-1.71351 -3.98391,-0.12787 -1.26568,1.14544 -1.45807,1.13851 -2.82879,-0.10193 -2.14075,-1.93733 -2.5044,-5.3358 -1.18143,-11.04037 1.64272,-7.08332 1.48317,-10.74659 -0.65166,-14.96349 -1.77409,-3.50423 -1.78588,-3.63904 -0.48152,-5.50995 3.47817,-4.98912 1.74339,-13.81062 -3.80761,-19.36156 l -3.04274,-3.04279 2.69014,-2.755 c 3.13419,-3.20964 2.81759,-4.40601 -1.27697,-4.82607 -2.19304,-0.22497 -3.11389,-0.76137 -3.90757,-2.27614 -0.96617,-1.84402 -0.9015,-2.09953 0.9304,-3.67526 l 1.96875,-1.69346 -3.79612,-4.95282 c -2.08788,-2.72405 -3.79613,-5.2337 -3.79613,-5.57698 0,-0.34329 -1.07398,-2.27699 -2.38661,-4.29707 -7.00958,-10.78754 -12.07601,-22.08965 -14.40617,-32.13713 -0.60901,-2.62594 -2.25963,-6.57586 -3.66806,-8.77761 -1.40843,-2.20173 -2.56079,-4.20132 -2.56079,-4.44353 0,-0.80646 -8.96859,-11.69487 -15.2509,-18.51549 -7.01342,-7.61441 -24.68006,-23.97907 -31.252617,-28.94943 -7.711654,-5.83176 -9.728081,-7.10156 -14.144945,-8.90749 -4.163417,-1.70228 -4.322049,-1.86617 -4.077459,-4.21236 0.139967,-1.34263 0.378507,-2.5683 0.530081,-2.72371 0.151585,-0.15539 1.875077,0.29373 3.829987,0.99808 5.396188,1.94419 8.381516,2.27573 8.381516,0.93083 0,-1.14266 -18.56983,-19.18235 -27.789507,-26.99616 -2.826554,-2.39554 -6.880331,-5.85937 -9.008395,-7.69738 -11.613646,-10.03078 -21.967483,-17.74296 -27.068558,-20.1623 -1.83802,-0.87175 -3.508941,-1.82508 -3.713169,-2.11854 -0.204221,-0.29345 -1.457415,-1.09004 -2.784875,-1.7702 -1.327458,-0.68014 -2.413553,-1.37943 -2.413553,-1.55394 0,-1.08705 1.860574,-4.1007 2.532761,-4.10242 1.223639,-0.003 11.301217,4.82309 17.889652,8.56746 2.45069,1.39279 5.016753,2.54174 5.702361,2.55323 0.685616,0.0115 1.688169,0.45225 2.227899,0.9795 0.539748,0.52725 2.318074,1.66028 3.951873,2.51787 1.633799,0.85758 5.357291,2.84904 8.27445,4.42547 5.004353,2.70434 6.923929,3.76406 15.188328,8.38496 3.234894,1.80873 8.311361,4.86139 21.837855,13.13185 3.267587,1.99788 7.110706,4.49652 8.54028,5.55251 1.429575,1.05598 3.649425,2.55888 4.933015,3.33979 10.1363,6.16659 25.72742,20.36927 32.12986,29.26855 1.32233,1.83803 2.54713,3.25831 2.72178,3.15619 1.56585,-0.9155 3.48155,0.46919 6.67235,4.82291 3.32884,4.54205 6.76066,8.92914 17.23823,22.03664 15.99076,20.00457 24.99417,28.70414 35.44394,34.24782 2.70271,1.43385 6.6035,3.7691 8.66829,5.18945 2.06487,1.42033 4.08285,2.58242 4.48444,2.58242 1.12683,0 5.04412,2.97684 5.04412,3.83305 0,0.50375 -2.38699,0.5824 -7.05497,0.23243 -6.16396,-0.46213 -7.05504,-0.38041 -7.05504,0.64697 0,1.27559 2.80353,6.58852 5.87346,11.13068 1.05826,1.56587 2.92677,4.41677 4.15207,6.33531 4.48387,7.02047 12.61879,16.4385 14.19889,16.4385 0.49574,0 1.04113,0.41773 1.21189,0.92828 0.20124,0.6018 1.64623,0.88933 4.10829,0.81749 l 3.79794,-0.1108 4.49378,5.43271 c 2.47157,2.98798 4.49378,5.77154 4.49378,6.18569 0,0.4751 -0.78268,0.52851 -2.12091,0.14472 -1.16649,-0.33455 -2.98844,-0.44242 -4.04898,-0.2397 l -1.92798,0.36857 2.80004,3.81905 c 1.54004,2.10047 3.04944,4.4874 3.3541,5.3043 0.30483,0.8169 2.50699,4.66002 4.89366,8.54028 2.38676,3.88027 5.24667,9.7285 6.3553,12.99609 1.10857,3.26758 2.33777,6.34415 2.73156,6.83683 0.3937,0.49266 0.54351,1.17464 0.33285,1.5155 -0.59852,0.96843 5.50444,28.48398 7.45394,33.60645 0.23317,0.61267 0.52003,1.8282 0.63744,2.70115 0.33958,2.52423 6.88841,27.32642 7.83944,29.69035 0.4738,1.17751 0.98044,3.05614 1.12594,4.17471 0.31564,2.42607 5.40581,18.43976 6.19931,19.50261 0.30483,0.40845 0.76856,1.87122 1.03041,3.25061 0.53767,2.83148 3.73887,9.41157 6.70205,13.77566 1.08914,1.60393 2.17048,3.77613 2.40315,4.82711 0.70788,3.19799 17.4192,37.6109 20.82376,42.88157 1.36383,2.11145 2.47985,4.22882 2.47985,4.70526 0,0.47642 1.9452,2.7815 4.32269,5.12238 l 4.32278,4.25615 -0.5328,5.1481 c -0.6583,6.35958 -0.21911,9.39333 1.98176,13.68944 2.90362,5.66804 4.62506,7.7441 7.15335,8.62714 1.33758,0.46717 2.36627,1.17017 2.28593,1.56221 -0.74297,3.62446 -1.69327,24.03066 -1.3384,28.73889 0.55668,7.38534 2.39569,16.60572 3.73188,18.71087 3.20309,5.04608 9.2634,27.86558 9.2634,34.88048 0,1.94942 0.89505,3.47553 4.27012,7.28019 3.40383,3.83719 4.70444,6.06657 6.41078,10.98934 1.17738,3.39658 2.59004,6.90403 3.13915,7.79445 0.62175,1.00791 0.94355,3.47568 0.85273,6.53919 -0.0854,2.88305 0.18767,5.13397 0.65961,5.43622 0.44294,0.28369 1.03527,1.25297 1.31645,2.15408 0.63549,2.03698 4.55993,5.4167 6.28974,5.4167 0.70852,0 1.98908,0.65293 2.84562,1.45095 1.4128,1.31624 1.51875,2.01551 1.1408,7.52971 -0.5132,7.48798 0.59284,9.98842 5.93438,13.41612 3.46964,2.22642 4.01641,2.34516 10.17502,2.20925 8.29294,-0.18305 9.981,0.47062 11.85828,4.59156 0.81853,1.7968 2.68849,4.70355 4.15549,6.45935 2.0253,2.42418 2.61326,3.74525 2.44314,5.48976 -0.20197,2.07084 -0.49868,2.32007 -3.009,2.52786 -3.45574,0.28598 -3.64268,1.74274 -0.55692,4.33928 2.96959,2.49866 3.16182,6.54735 0.37129,7.81882 -1.78402,0.81281 -2.64486,3.578 -1.11392,3.578 1.08183,0 0.90057,2.27877 -0.37591,4.72635 -1.46644,2.81168 -1.39957,4.80475 0.33293,9.93769 0.79342,2.35021 1.54531,5.08882 1.671,6.0858 0.16899,1.34053 0.85728,1.97474 2.6421,2.4348 2.06275,0.53165 2.41356,0.95294 2.41356,2.89827 0,1.67249 -0.40499,2.38215 -1.52728,2.67557 -0.83997,0.21966 -1.37186,0.80441 -1.18192,1.29939 0.18994,0.49489 0.58478,2.81613 0.87742,5.15825 0.59859,4.7908 0.86768,5.12053 8.95442,10.96996 2.99713,2.16789 5.46122,4.1828 5.47576,4.47763 0.0138,0.29475 -2.63227,0.46184 -5.88174,0.37131 -5.133,-0.14303 -6.04869,0.0275 -6.97915,1.2988 -2.13881,2.92226 -2.0275,7.04573 0.35056,12.98457 1.22238,3.05282 2.50739,5.89659 2.85552,6.31944 0.79398,0.9646 2.83667,6.6961 7.28773,20.44868 1.91683,5.92252 3.6573,10.93529 3.86756,11.13953 0.21041,0.20424 0.38249,0.87255 0.38249,1.48528 0,0.61265 0.63475,4.02721 1.41062,7.58775 1.15007,5.27827 1.23611,6.6841 0.46601,7.61197 -1.55247,1.87061 -3.19317,1.32661 -7.20559,-2.38935 z m 305.28273,-99.04289 c -9.7385,-8.43847 -13.21406,-11.80869 -21.02808,-20.39086 -4.49037,-4.93182 -9.67675,-10.94716 -11.5251,-13.3674 -1.84828,-2.42017 -4.00186,-5.23578 -4.78562,-6.25691 -2.93977,-3.82976 -16.99063,-25.6807 -17.44112,-27.1232 -0.2582,-0.82632 -1.97242,-3.83399 -3.80955,-6.6837 -1.83724,-2.84977 -3.34258,-5.57821 -3.34534,-6.0633 0,-0.48509 -2.01011,-4.48757 -4.4608,-8.89452 -2.45069,-4.40693 -4.45642,-8.52149 -4.45714,-9.14359 -7.4e-4,-0.62204 -1.45498,-3.97162 -3.23169,-7.44342 -1.77669,-3.47181 -3.46793,-7.28909 -3.75821,-8.48295 -0.29028,-1.19378 -1.71389,-4.70272 -3.16368,-7.79765 -3.26181,-6.96345 -4.22349,-9.27304 -5.43514,-13.05342 -0.52361,-1.63379 -1.76337,-4.64145 -2.75503,-6.68369 -0.99156,-2.04224 -2.30518,-5.217 -2.91921,-7.05503 -0.95201,-2.84999 -3.8544,-9.07798 -11.64047,-24.97888 -0.82714,-1.68919 -3.3914,-5.23014 -5.69837,-7.86879 -2.30697,-2.63865 -4.63109,-5.85166 -5.16477,-7.13997 -0.53368,-1.28832 -1.2639,-2.34241 -1.62282,-2.34241 -0.35893,0 -0.65255,-0.69008 -0.65255,-1.53349 0,-0.84342 -1.63225,-4.603 -3.62724,-8.35463 -1.99493,-3.75163 -3.84182,-7.75006 -4.10415,-8.88539 -0.26233,-1.13535 -1.37033,-2.80628 -2.46214,-3.71318 -8.08821,-6.7179 -8.75383,-7.61882 -9.69828,-13.12613 -1.16917,-6.81817 -1.1482,-7.50784 0.21204,-6.98585 1.6229,0.62277 1.36992,-0.32833 -0.79025,-2.97136 -12.78859,-15.64712 -16.9613,-22.26799 -18.96054,-30.08489 -1.86037,-7.27394 -9.11194,-21.80502 -12.26164,-24.57049 -2.97666,-2.61358 -7.33249,-8.5792 -8.7618,-12.00001 -0.90001,-2.15399 -0.9048,-2.79996 -0.0324,-4.37582 1.38211,-2.497 1.32467,-2.96273 -0.36551,-2.96273 -1.71837,0 -1.93309,-0.31669 -2.55469,-3.76842 -0.42741,-2.37329 -0.2607,-2.76548 1.57336,-3.70249 2.91637,-1.48989 6.1786,-3.71626 8.54951,-5.8348 2.69255,-2.40591 2.79353,-6.24665 0.23503,-8.93265 -1.32312,-1.38905 -2.32996,-4.17377 -3.75895,-10.39674 -1.07338,-4.67474 -2.16081,-8.83792 -2.4164,-9.2515 -0.25558,-0.41359 -0.54612,-1.4345 -0.64556,-2.26867 -0.0994,-0.83417 -0.97085,-3.85597 -1.93642,-6.71511 l -1.75557,-5.19843 -4.05118,-0.5045 c -2.22816,-0.27748 -5.38786,-0.63481 -7.02165,-0.79406 -3.82069,-0.37241 -7.55746,-2.3444 -8.18424,-4.319 -0.27046,-0.85216 -0.29621,-1.74488 -0.0569,-1.98379 0.23901,-0.23893 -0.26274,-0.92271 -1.11473,-1.51951 -1.46685,-1.02746 -16.26449,-20.48441 -16.26449,-21.38574 0,-0.23368 -1.35407,-2.74331 -3.00899,-5.57697 -3.78267,-6.47682 -5.14169,-10.92252 -5.15193,-16.85291 -0.01,-5.46523 1.25576,-8.94989 4.04654,-11.14508 1.55507,-1.22322 1.89052,-1.96152 1.49056,-3.28087 -0.77708,-2.56363 -3.32364,-6.68171 -5.35951,-8.66683 l -1.81098,-1.7659 1.49625,-1.4963 1.49633,-1.49629 6.04122,6.00073 c 6.49706,6.45358 11.5316,9.50385 14.46934,8.76651 2.54907,-0.63977 5.08548,-4.53911 5.08548,-7.81801 0,-3.26383 -3.91347,-9.81653 -7.72896,-12.94132 -4.31261,-3.53177 -4.61443,-3.75287 -10.06135,-7.36734 -6.25805,-4.15271 -13.1498,-6.58448 -16.92475,-5.97192 -4.10285,0.66582 -3.98252,-1.01704 0.6012,-8.40664 7.47019,-12.04304 7.85984,-17.75494 1.75955,-25.79764 -7.73293,-10.1951 -8.28311,-11.07325 -8.13947,-12.99215 0.0804,-1.07457 1.02934,-2.72732 2.10858,-3.67277 2.36132,-2.06859 2.60618,-1.45995 -5.73079,-14.24762 -3.32868,-5.10561 -6.30306,-9.78419 -6.60976,-10.39685 -3.03449,-6.0612 -4.25989,-8.30833 -6.23969,-11.44196 -1.26625,-2.00436 -2.21549,-3.93601 -2.10922,-4.29256 0.30621,-1.0279 -2.00305,-5.05922 -2.89801,-5.05922 -0.48096,0 -0.62395,0.67912 -0.35187,1.67092 1.28583,4.68779 1.32353,6.95647 0.13186,7.94542 -1.00651,0.83529 -1.51859,0.83939 -3.04157,0.0243 -1.00709,-0.53905 -1.83121,-1.28352 -1.83121,-1.6544 0,-0.37087 -1.83805,-3.75436 -4.08449,-7.51884 -2.24644,-3.76448 -4.08448,-7.28106 -4.08448,-7.81464 0,-0.53358 -1.83804,-4.21633 -4.08448,-8.18392 -2.24645,-3.96759 -4.08448,-7.72704 -4.08448,-8.35436 0,-0.62731 -0.99645,-2.61114 -2.21435,-4.40851 -1.218,-1.79737 -2.22054,-3.66181 -2.22793,-4.14319 -0.008,-0.48139 -0.44253,-1.31685 -0.96687,-1.85659 -0.52426,-0.53974 -1.8889,-2.90951 -3.03231,-5.26618 -1.30711,-2.69394 -3.34119,-5.31339 -5.47829,-7.05502 -18.63718,-15.18774 -32.11779,-29.69192 -38.14008,-41.03583 -0.98158,-1.84905 -3.26499,-5.1175 -5.07434,-7.26323 -3.21414,-3.81181 -22.11235,-21.44008 -27.12731,-25.30433 -1.38812,-1.06967 -5.63825,-4.4668 -9.44456,-7.54921 -11.58783,-9.38376 -30.6053,-22.987 -32.13608,-22.987 -0.32977,0 -2.14327,-1.08859 -4.03005,-2.41907 -5.1387,-3.62362 -11.48165,-6.84615 -11.77039,-5.97998 -0.67959,2.03889 -2.15326,3.15169 -3.64519,2.75271 -1.46302,-0.39122 -1.5801,-0.88312 -1.48528,-6.23877 0.0901,-5.08743 -0.10588,-6.03661 -1.56799,-7.59486 -1.85949,-1.9818 -2.05082,-2.86475 -0.87531,-4.04022 0.8277,-0.82772 9.39126,1.6533 16.28496,4.71803 1.83804,0.81713 6.68368,2.73508 10.76817,4.26211 10.82861,4.04841 8.23014,2.42306 31.55592,19.73847 5.77735,4.28872 12.77235,9.46858 15.54436,11.51082 5.77164,4.25215 13.39515,10.04843 21.96464,16.70004 10.58228,8.21397 13.84304,10.72474 17.85481,13.74792 4.88311,3.67985 27.84517,22.18494 32.90034,26.51437 2.04927,1.75504 6.29648,5.36317 9.43814,8.01809 10.92741,9.23411 30.46208,27.28136 36.64709,33.85665 8.36436,8.89221 16.5109,19.25944 18.26591,23.24521 0.94762,2.15209 2.20216,3.61156 3.6894,4.29201 3.12484,1.42974 7.25636,3.89765 8.45274,5.04919 1.65151,1.58966 -0.24153,4.36548 -2.57743,3.77922 l -1.82584,-0.45828 1.25438,2.43532 c 0.68984,1.33943 2.01735,3.43936 2.94985,4.66651 0.93259,1.22717 2.07226,3.23227 2.53258,4.4558 0.46041,1.22354 2.07063,4.14088 3.5785,6.48298 2.63138,4.08751 3.1649,4.47217 13.29482,9.58658 5.80432,2.93051 10.38804,5.59579 10.1859,5.92286 -0.20205,0.32707 -2.18584,1.16784 -4.40831,1.8684 -3.75374,1.18328 -4.00885,1.40954 -3.59191,3.18615 0.24681,1.05185 0.7398,2.22992 1.09548,2.61794 0.35576,0.38803 0.64677,1.28935 0.64677,2.00294 0,1.68691 3.3204,7.91428 5.41736,10.16013 2.11287,2.26284 5.17304,3.84068 7.44899,3.84068 1.86103,0 2.72894,2.05918 2.72894,6.47474 0,1.17657 0.50549,1.96545 1.41102,2.20226 1.00872,0.26378 1.55109,1.30271 1.90214,3.64365 0.28566,1.90492 0.88766,3.27465 1.4393,3.27465 0.97613,0 3.3286,7.99198 8.30286,28.20816 1.45554,5.91594 2.95886,11.13257 3.34045,11.59247 0.38177,0.4599 0.82543,2.20069 0.98613,3.86838 0.31888,3.31068 3.20325,12.71702 4.2464,13.84794 0.35788,0.38803 0.65076,1.19069 0.65076,1.78369 0,1.22019 7.33468,20.87068 8.22064,22.02418 0.31643,0.41201 1.11002,3.0855 1.76337,5.94106 1.76086,7.69572 4.94273,18.45858 5.69528,19.26486 0.36227,0.38802 0.65863,1.23276 0.65863,1.8772 0,2.4223 3.98968,13.28795 7.62018,20.75294 2.21825,4.56101 5.69032,10.10633 8.45307,13.50055 l 4.68852,5.76021 -1.15812,2.77178 c -0.72842,1.74334 -0.98441,3.69754 -0.68998,5.26682 0.87441,4.66144 6.70967,9.65007 12.83384,10.97195 1.32751,0.28652 2.41356,0.82858 2.41356,1.20458 0,0.37599 0.51174,0.68363 1.13732,0.68363 1.86574,0 1.93935,1.57541 0.36153,7.74468 -0.88116,3.44531 -1.49885,8.27352 -1.49885,11.71632 0,5.24296 0.1927,6.04876 1.84096,7.69694 2.05016,2.05016 3.87853,1.93522 8.54496,-0.53712 3.60548,-1.91028 3.96765,-1.75626 3.32365,1.41357 -0.31125,1.53169 -0.6012,3.45325 -0.64458,4.27015 -0.0431,0.81689 -0.28931,1.81946 -0.54661,2.22791 -0.25722,0.40843 -1.22481,4.3115 -2.1501,8.67347 -1.65873,7.82035 -1.66539,8.06349 -0.47851,17.45187 1.39437,11.02912 3.68103,20.59864 5.31165,22.22931 0.62508,0.6251 1.13651,1.42433 1.13651,1.77609 0,0.35174 0.64409,0.84397 1.43142,1.09383 0.78716,0.24986 2.08006,1.55388 2.87299,2.89782 1.22668,2.07903 1.42849,3.76349 1.35277,11.29223 l -0.089,8.8487 3.18034,3.23811 c 1.74915,1.78095 3.62943,4.12026 4.1784,5.19843 1.66214,3.26431 4.21228,15.47253 4.65472,22.28323 0.45764,7.04589 1.50698,9.48387 4.39369,10.20838 1.04795,0.26303 3.55974,1.27629 5.58179,2.25175 4.17141,2.01238 5.7771,4.50057 4.5994,7.12718 -0.60582,1.35108 -0.3058,2.54361 1.54329,6.13304 1.26243,2.45067 2.57329,4.65629 2.91296,4.90143 0.33976,0.24515 0.70974,1.07274 0.82226,1.83921 0.27907,1.90166 2.48993,2.38163 11.36912,2.46821 l 7.58791,0.0743 2.99461,3.96633 c 1.64704,2.1814 3.00355,4.27007 3.01435,4.64146 0.0114,0.37131 1.51478,2.6549 3.34186,5.0747 3.23679,4.28648 3.90314,5.63927 2.76509,5.61326 -0.30629,-0.008 -2.97982,-0.64207 -5.94105,-1.41121 -5.20993,-1.35331 -5.38404,-1.35442 -5.38404,-0.0356 0,2.2925 1.22929,4.6889 3.6708,7.15542 2.20851,2.23124 2.251,2.3791 0.81487,2.83493 -0.8334,0.26452 -1.51518,0.73892 -1.51518,1.05432 0,0.31531 -0.85435,0.9626 -1.89849,1.43833 -2.12466,0.96809 -1.81366,2.09874 0.85663,3.11401 2.10662,0.80093 2.374,3.28867 0.56797,5.28435 -1.69408,1.87195 -1.67588,11.01533 0.0269,13.61448 1.1053,1.68689 1.70683,1.86832 6.21938,1.87574 l 4.99563,0.008 -2.42828,1.9137 c -4.78008,3.767 -5.44513,7.11725 -3.52407,17.7496 0.5904,3.26759 1.085,9.04832 1.0993,12.84608 0.0236,6.28111 0.18426,7.0527 1.77833,8.54028 0.96378,0.8994 2.15341,3.07768 2.64372,4.84071 0.84387,3.03446 1.00782,3.1798 3.07536,2.72568 3.13126,-0.68768 3.48654,1.03167 1.4926,7.22278 -2.85561,8.86629 -2.43704,16.04392 1.1625,19.9339 0.9655,1.04348 1.7555,2.23652 1.7555,2.65121 0,0.41468 1.10051,2.06734 2.44557,3.67254 1.34505,1.6052 3.5547,4.67718 4.91047,6.82658 2.01694,3.19779 2.2982,4.10877 1.54793,5.01278 -1.44264,1.73828 -2.4338,1.36295 -7.11745,-2.69546 z M 524.41131,793.6827 c -4.81493,-3.43943 -14.83737,-13.03321 -19.93909,-19.08642 -13.81494,-16.3914 -18.5938,-24.76273 -20.93344,-36.67041 -0.69187,-3.52127 -1.55962,-6.40232 -1.92838,-6.40232 -0.36868,0 -0.47299,-0.31948 -0.23162,-0.70995 0.6865,-1.11069 -1.60121,-5.90298 -4.79235,-10.03944 -1.59943,-2.07307 -3.67721,-4.82711 -4.61743,-6.12019 -0.94023,-1.29307 -3.63392,-4.69582 -5.98606,-7.56171 -6.39568,-7.79283 -7.13101,-9.3586 -7.90526,-16.83224 -0.66415,-6.41068 -2.86892,-13.61674 -4.87058,-15.9192 -0.53271,-0.61268 -1.87501,-3.05178 -2.98299,-5.42033 -1.10791,-2.36848 -3.11794,-5.752 -4.46673,-7.51895 -1.34863,-1.76694 -2.8275,-3.91382 -3.28611,-4.77082 -0.45862,-0.85707 -2.49789,-3.55775 -4.53172,-6.00159 -2.03376,-2.44382 -3.69777,-4.67545 -3.69777,-4.95916 0,-0.28373 -3.39758,-4.52334 -7.55014,-9.42137 -4.15248,-4.89805 -7.53138,-9.44269 -7.50846,-10.09922 0.0227,-0.65652 -1.29241,-5.45086 -2.92279,-10.6541 -2.95392,-9.4269 -2.97397,-9.46312 -5.67327,-10.22403 -3.89827,-1.09892 -5.8832,-3.04702 -6.11426,-6.00091 -0.22488,-2.87453 0.57862,-5.87655 1.57278,-5.87655 0.36657,0 1.0231,-0.66642 1.45904,-1.48093 0.62671,-1.17105 0.37267,-2.37532 -1.21417,-5.75541 -1.10368,-2.35096 -2.28397,-4.38587 -2.623,-4.52202 -0.33895,-0.13615 -0.61632,-0.71449 -0.61632,-1.28519 0,-0.5707 -1.25325,-2.91575 -2.78492,-5.21124 -1.53167,-2.29546 -3.45322,-5.23667 -4.27012,-6.536 -2.27033,-3.61117 -10.54223,-15.12964 -14.5843,-20.30824 -1.98566,-2.54404 -3.61019,-4.79979 -3.61019,-5.01278 0,-0.21299 1.16965,-0.38725 2.5992,-0.38725 1.42954,0 2.59921,-0.33419 2.59921,-0.74264 0,-0.40845 -0.29362,-0.74263 -0.65255,-0.74263 -0.35884,0 -1.07857,-1.08611 -1.59926,-2.41356 -0.8901,-2.26907 -3.23924,-6.12486 -13.0073,-21.34995 -2.22712,-3.47139 -4.04931,-6.7721 -4.04931,-7.33491 0,-0.56281 -1.31061,-3.40372 -2.91247,-6.31314 -6.50771,-11.81961 -12.67055,-36.58532 -9.41507,-37.83456 0.57195,-0.21949 1.25154,-1.67553 1.51014,-3.23565 0.52174,-3.14705 -1.25512,-14.64365 -2.49383,-16.13621 -0.59925,-0.72206 -0.16281,-1.29036 1.80465,-2.34989 2.77363,-1.49371 3.3065,-3.25782 1.4497,-4.79886 -2.46304,-2.04418 -12.55113,-6.65774 -14.55791,-6.65774 -1.16599,0 -2.12003,-0.30763 -2.12003,-0.68362 0,-0.376 -1.00254,-0.90383 -2.22792,-1.17296 -1.22531,-0.26913 -2.22792,-0.60211 -2.22792,-0.73996 0,-0.13784 1.16965,-2.45539 2.5992,-5.15009 1.67969,-3.1662 2.59929,-5.91692 2.59929,-7.77554 l 0,-2.87606 -5.19606,-0.2936 c -5.44522,-0.30767 -7.86454,-1.58743 -7.04382,-3.72604 0.2416,-0.62987 1.2036,-1.49339 2.13757,-1.91893 1.94463,-0.88601 4.39882,-5.55363 4.37615,-8.32262 -0.008,-1.03017 -0.94055,-8.25251 -2.07137,-16.04966 l -2.05594,-14.17664 -3.79923,-0.67602 -3.79924,-0.67604 -1.55434,-10.1636 c -0.95095,-6.21864 -2.06949,-10.9499 -2.8816,-12.1894 -4.43139,-6.76307 -21.6725,-21.67011 -39.53617,-34.18378 -1.49333,-1.04607 -1.91367,-1.0304 -4.64148,0.17309 -1.64964,0.72784 -2.9994,1.5433 -2.9994,1.81213 0,0.26884 -2.51666,1.08147 -5.59259,1.80584 -5.24471,1.2351 -5.79343,1.24034 -8.82062,0.0843 -4.0151,-1.53334 -5.3691,-3.00745 -6.02903,-6.56352 -0.54969,-2.96209 -0.31709,-3.21618 1.87143,-2.04491 0.76043,0.40699 1.89986,0.5415 2.53201,0.29892 0.99425,-0.38151 1.01432,-0.70696 0.14844,-2.41089 -0.55059,-1.08341 -1.24189,-3.94902 -1.53631,-6.36801 -0.74159,-6.09203 -5.27672,-14.43408 -11.0461,-20.3184 l -4.57438,-4.66546 1.67092,-2.90799 c 2.44297,-4.25168 2.16959,-5.48533 -1.79823,-8.11351 -1.90807,-1.26384 -3.91314,-2.29789 -4.45583,-2.29789 -0.54262,0 -0.98662,-0.25505 -0.98662,-0.56677 0,-0.31173 -2.33931,-1.70396 -5.19848,-3.09384 -2.8591,-1.38989 -5.19841,-2.7063 -5.19841,-2.92538 0,-0.21907 1.06322,-1.49532 2.36287,-2.8361 1.29948,-1.34078 2.1544,-2.6461 1.89986,-2.9007 -0.2547,-0.2546 -4.32553,-0.41348 -9.04655,-0.35307 -4.72102,0.0604 -8.58355,-0.18576 -8.58355,-0.54706 0,-0.3613 0.70259,-1.29274 1.56125,-2.06986 2.57418,-2.32956 3.63716,-5.18537 3.63716,-9.77128 0,-3.95546 -0.28931,-4.7394 -3.23379,-8.76282 -3.2502,-4.44114 -10.03576,-11.26511 -12.65211,-12.72378 -1.06533,-0.59391 -1.2851,-1.25906 -0.91,-2.75365 0.44366,-1.76749 0.79869,-1.94972 3.44575,-1.76832 1.62307,0.11125 2.95155,0.43775 2.95221,0.72557 5.7e-4,0.28783 1.2543,0.75376 2.78598,1.03542 1.53166,0.28165 2.95195,0.72266 3.15611,0.98001 0.48803,0.61493 12.88398,5.2589 14.03738,5.2589 0.49079,0 2.12824,0.63959 3.63879,1.42131 8.02703,4.15418 10.50088,5.26321 11.75835,5.27125 0.76165,0.004 3.38993,1.17876 5.84063,2.60865 2.45069,1.42988 7.12922,3.95518 10.39681,5.61178 3.26758,1.65658 6.44238,3.31795 7.05504,3.69193 0.61265,0.37397 4.45585,2.74766 8.54033,5.27485 4.08448,2.52717 9.09725,5.6262 11.13944,6.88672 2.04228,1.2605 6.99745,4.79572 11.01141,7.85601 4.01405,3.06031 8.04459,6.06546 8.95677,6.67814 6.70026,4.50004 30.26011,27.37611 37.47683,36.38902 1.47163,1.83803 5.64403,6.60016 9.27176,10.58253 l 6.59602,7.24068 6.04503,0.009 6.04505,0.009 1.85655,2.77568 c 1.02114,1.52663 2.11101,3.39977 2.42185,4.16252 0.58926,1.44537 5.82332,10.21868 6.48301,10.86662 0.20791,0.20421 1.15406,1.87515 2.10248,3.71316 1.64282,3.18379 1.66922,3.47243 0.55693,6.10287 -0.64206,1.51856 -1.16738,2.90709 -1.16738,3.08563 0,0.17853 1.5874,1.24969 3.52748,2.38032 9.9962,5.82544 24.57701,20.09825 26.30423,25.7485 0.4682,1.53169 1.13269,2.78488 1.47642,2.78488 0.34375,0 0.62509,0.77004 0.62509,1.71119 0,2.84536 4.05792,8.34744 12.53568,16.99707 l 8.05068,8.21395 0.4505,6.38387 c 0.44049,6.24178 0.51305,6.43829 3.25986,8.82986 1.54524,1.3453 3.71857,2.94534 4.82964,3.55567 2.36758,1.30049 3.72019,3.49862 3.11811,5.06756 -0.76247,1.98695 -2.38067,1.92117 -5.33198,-0.21674 -1.59301,-1.154 -4.30074,-2.33544 -6.01708,-2.6254 l -3.1207,-0.52724 1.58668,3.04406 1.58667,3.04405 -1.74811,1.45016 -1.7481,1.45016 3.34193,2.96982 c 1.83795,1.63341 3.59247,2.98407 3.89876,3.00149 1.26999,0.0721 0.41255,1.51828 -1.6078,2.71175 -1.19061,0.70333 -2.31526,2.06571 -2.49911,3.02752 -0.36242,1.89623 0.53856,12.69364 1.10678,13.26178 0.19132,0.19132 3.9778,1.01478 8.41456,1.82992 4.43666,0.81514 8.26677,1.73217 8.51116,2.03786 5.12276,6.40662 7.51674,9.74181 13.93265,19.40993 4.1918,6.31668 8.00429,12.76257 8.47224,14.32422 0.4678,1.56164 1.04845,2.83889 1.29006,2.83835 0.24169,-5.6e-4 0.32415,1.85158 0.1832,4.11587 -0.20489,3.29293 -0.68545,4.5869 -2.40089,6.46505 -3.38749,3.70883 -4.76684,7.15475 -4.74141,11.84504 0.0203,3.65744 -0.20668,4.35331 -1.67222,5.13765 -0.93235,0.49898 -1.8001,0.7675 -1.9283,0.59669 -0.12828,-0.1708 -1.81658,-2.56631 -3.75187,-5.32333 -1.93521,-2.75701 -3.68209,-5.01277 -3.88203,-5.01277 -0.64937,0 -6.14001,2.93652 -9.63515,5.15305 l -3.41025,2.16273 2.04594,1.35489 c 1.1253,0.74518 3.72807,2.19035 5.78367,3.21146 2.05577,1.02112 3.8397,2.20542 3.96425,2.63176 0.12454,0.42635 -0.86459,1.17492 -2.19802,1.66346 -1.33336,0.48856 -3.48541,1.53983 -4.7822,2.33619 -2.24637,1.37947 -2.32006,1.57104 -1.55841,4.05257 0.75874,2.47194 1.01115,2.63111 4.95443,3.1238 2.42917,0.3035 4.53189,1.01393 5.06233,1.71031 1.48642,1.95161 1.10498,4.40016 -0.88904,5.70669 -2.74097,1.79595 -4.68747,5.41816 -6.30013,11.72349 -1.87493,7.33071 -1.0266,13.71439 2.28762,17.21483 2.63113,2.779 2.70824,4.38708 0.28631,5.974 -2.84114,1.86157 -2.2471,2.53094 2.24628,2.53094 3.75049,0 4.16678,0.16825 4.84784,1.95957 0.8788,2.31152 0.94461,2.22624 -3.98399,5.16415 -3.80037,2.26535 -3.84977,2.34117 -3.62854,5.56975 0.30587,4.46299 2.02221,11.12311 3.95774,15.35696 0.88295,1.93131 2.51333,5.51659 3.62318,7.96728 1.10978,2.45068 3.50059,6.46091 5.31288,8.91161 1.81228,2.45068 3.7795,5.16938 4.37143,6.04155 0.59201,0.87216 3.58274,4.88239 6.64608,8.9116 3.06341,4.0292 5.90398,7.99421 6.3124,8.81111 1.07939,2.15861 1.36845,-11.46289 0.44066,-20.76239 -0.51793,-5.1912 -0.50038,-7.68096 0.0585,-8.35462 1.82227,-2.19574 4.40482,-0.24174 4.83143,3.65565 0.13876,1.26691 0.58056,2.69906 0.98182,3.18255 0.40125,0.48351 0.54871,1.05998 0.32764,1.28106 -0.68455,0.6845 2.41836,8.76254 6.35401,16.54194 4.3594,8.617 8.72174,15.8175 13.19205,21.77483 l 3.16465,4.21734 -6.448,6.03598 -6.448,6.03599 3.09762,4.53815 c 1.70375,2.49599 3.09779,4.83521 3.09779,5.19821 0,0.36307 0.49753,1.07311 1.1058,1.57787 0.6081,0.5047 0.91959,1.21889 0.69202,1.58701 -0.22748,0.36812 0.68781,7.43168 2.034,15.69681 l 2.44768,15.02749 5.97573,7.18112 5.97574,7.18103 0.91658,8.41427 c 1.07964,9.91066 2.81946,18.69394 4.30051,21.70999 0.58227,1.18599 1.05876,2.82995 1.05876,3.65316 0,0.82321 1.01001,3.28638 2.24449,5.47365 1.79693,3.18404 2.08778,4.26934 1.45912,5.44411 -0.99343,1.8562 -2.01344,1.80601 -4.8779,-0.24003 z"
        />
      </g>
    </svg>
  );
}

export default IconFalconMarks;