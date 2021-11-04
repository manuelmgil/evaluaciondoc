<?php
require('mysql_table.php');

class PDF extends PDF_MySQL_Table
{
function Header()
{
    // Logo
    $this->Image('img/logo.jpg',10,8,33);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Movernos a la derecha
    $this->Cell(80);
    // Título
    $this->Cell(30,10,'Reporte de Evaluacion Docente',0 ,0,'C');
    // Salto de línea
    $this->Ln(40);
    parent::Header();
}
}

// Connect to database
$link = mysqli_connect('localhost','root','','e_docente');

$pdf = new PDF();
$pdf->AddPage();
// First table: output all columns
$pdf->Table($link,'select * from p_docente');
// Second table: specify 3 columns

$pdf->Output();
?>