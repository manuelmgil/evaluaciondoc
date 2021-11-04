<?php
require('fpdf/fpdf.php');

class PDF extends FPDF
{

// Cargar los datos PASO 2
function LoadData($file)
{
    // Leer las líneas del fichero
    $lines = file($file);
    $data = array();
    foreach($lines as $line)
        $data[] = explode(';',trim($line));
    return $data;
}
// Cabecera de página
function Header()
{
    // Logo
    $this->Image('img/logo.jpg',10,8,33);
    // Arial bold 15
    $this->SetFont('Arial','B',15);
    // Movernos a la derecha
    $this->Cell(80);
    // Título
    $this->Cell(30,10,'Reporte de Evaluacion Docente',0,0,'C');
    // Salto de línea
    $this->Ln(40);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','I',8);
    // Número de página
    $this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
}
function Datos()
{
    //Ejemplos de Variables 
    $name= "Fernando Araujo Cruz";
    $periodo= "2021 A";
    $materia= "Programacion Orientada a Objetos";
    $id_cuestionario= 2;
    $this->SetX(25);
    $this->Cell(0,6,'Nombre:  '.$name,0,1);
    $this->SetX(25);
    $this->Cell(0,6,'Periodo:  '.$periodo,0,1);
    $this->SetX(25);
    $this->Cell(0,6,'Materia:  '.$materia,0,1);
    $this->SetX(25);
    $this->Cell(0,6,'Cuestionario No.:  '.$id_cuestionario,0,1);
    $this->Ln(20);
}
// Tabla coloreada PASO 2
function FancyTable($header, $data)
{
    $this->SetX(25);
    // Colores, ancho de línea y fuente en negrita
    $this->SetFillColor(51,138,255);
    $this->SetTextColor(255);
    $this->SetDrawColor(51,138,255);
    $this->SetLineWidth(.3);
    $this->SetFont('','B');
    // Cabecera
    $w = array(15, 110, 15, 15);
    for($i=0;$i<count($header);$i++)
        $this->Cell($w[$i],7,$header[$i],1,0,'C',true);
    $this->Ln();
    // Restauración de colores y fuentes
    $this->SetFillColor(224,235,255);
    $this->SetTextColor(0);
    $this->SetFont('');
    // Datos
    
    $fill = false;
    foreach($data as $row)
    {
        $this->SetX(25);
        $this->Cell($w[0],6,$row[0],'LR',0,'L',$fill);
        $this->Cell($w[1],6,$row[1],'LR',0,'L',$fill);
        $this->Cell($w[2],6,number_format($row[2]),'LR',0,'R',$fill);
        $this->Cell($w[3],6,number_format($row[3]),'LR',0,'R',$fill);
        $this->Ln();
        $fill = !$fill;
    }
    // Línea de cierre
    $this->SetX(25);
    $this->Cell(array_sum($w),0,'','T');
}

}

// Creación del objeto de la clase heredada
$pdf = new PDF();
// Títulos de las columnas
$header = array('Periodo','Pregunta', 'Promedio', 'Estatus');
// Carga de datos
$data = $pdf->LoadData('calif.txt');
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->SetFont('Arial','',9);
    $pdf->Datos();
    $pdf->FancyTable($header,$data);
    $pdf->Output();
?>