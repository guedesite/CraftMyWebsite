<?php
if($_Joueur_['rang'] == 1 OR $_PGrades_['PermsPanel']['widgets']['actions']['editWidgets'] == true) {
	$lectureWidgets = new Lire('modele/config/configWidgets.yml');
	$lectureWidgets = $lectureWidgets->GetTableau();

	$c = $lectureWidgets['Widgets'][$_GET['id'] + 1];
	$lectureWidgets['Widgets'][$_GET['id'] + 1 ] = $lectureWidgets['Widgets'][$_GET['id']];
	$lectureWidgets['Widgets'][$_GET['id']] = $c;
	$ecriture = new Ecrire('modele/config/configWidgets.yml', $lectureWidgets);
}
?>