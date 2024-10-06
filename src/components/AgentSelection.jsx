const AgentSelecion = () => {
  return (
    <div style={{ padding: '15px', fontSize: '1.5rem' }}>
      <label htmlFor="agents">Choose your agent: </label>

      <select
        name="agents"
        id="agents"
        style={{ padding: '0 4px', fontSize: '1.1rem' }}
      >
        <option value="Jett">Jett</option>
        <option value="Sage">Sage</option>
        <option value="Brimstone">Brimstone</option>
        <option value="Sova">Sova</option>
        <option value="Raze">Raze</option>
      </select>
    </div>
  );
};

export default AgentSelecion;
