/// @title Um contrato para operações básicas de matemática
/// @author H4XF13LD MORRIS 💯💯😎💯💯
/// @notice No momento, este contrato somente adiciona uma função de multiplicação
contract Math {
  /// @notice Multiplica dois números juntos
  /// @param x o primeiro uint.
  /// @param y o segundo uint.
  /// @return z o produto de (x * y)
  /// @dev Esta função não atualmente não checa por overflows
  function multiply(uint x, uint y) returns (uint z) {
    // Este é somente um comentário normal, e não sera lido pelo natspec
    z = x * y;
  }
}