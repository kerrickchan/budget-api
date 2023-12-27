grpcurl -plaintext -import-path protos -proto transaction.proto -d @ localhost:5001 transaction.TransactionService/Add <<EOM
{
  "date": 1703593978,
  "description": "test",
  "categoryCode": "Miscellaneous",
  "amount": 2,
  "currencyCode": "HKD"
}
EOM
