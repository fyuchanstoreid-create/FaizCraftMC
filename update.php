<?php

$password = "Faiz040713";

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data["password"]) || $data["password"] !== $password){
  echo "unauthorized";
  exit;
}

$status = $data["maintenance"];

file_put_contents("config.json", json_encode([
  "maintenance" => $status
]));

echo "success";

?>
