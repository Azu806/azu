<?php
// Salva i dati inviati dal controller
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data) {
        // Salva i dati in un file JSON
        file_put_contents('substitution.json', json_encode($data));
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No data received']);
    }
}
?>
