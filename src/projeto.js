export default function Projetos() {
  const projetos = [
    {
      titulo: "Projeto 1-meu portfolio",
      descricao: "Meu primeiro site em HTML e CSS",
    },
    {
      titulo: "Projeto 2- APP mobille de compras",
      descricao: "Em desenvolvimento",
    },
  ];

  return (
    <section>
      <h2>Meus Projetos</h2>

      {projetos.map((projeto, index) => (
        <div key={index}>
          <h3>{projeto.titulo}</h3>
          <p>{projeto.descricao}</p>
        </div>
      ))}
    </section>
  );
}
