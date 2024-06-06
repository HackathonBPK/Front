import React from 'react';
import CardPlanos from '@/components/CardPlanos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div className="w-full flex-col min-h-screen h-auto bg-[#10171E] text-white flex items-center justify-center">
      <Navbar />
      <div className=" flex lg:flex-row flex-col lg:items-start items-center justify-center gap-20 w-full h-2/3 py-20">
        <CardPlanos
          checked={false}
          nome={'Plano Começo'} // Simple and inviting
          valor={'Gratuito'}
          beneficio={[
            'Acesso a todos os cursos básicos',
            'Suporte via email para dúvidas',
            'Comunidade online para interação com outros alunos',
            'Certificado de conclusão dos cursos',
          ]}
        />
        <CardPlanos
          checked={true}
          nome={'Plano Crescimento'} // Suggests a path towards growth
          valor={'R$999,00'}
          beneficio={[
            'Acesso a todos os cursos, incluindo avançados',
            'Suporte individualizado por telefone e chat',
            'Materiais de apoio adicionais para download',
            'Descontos em eventos e workshops',
            'Acesso a plataforma de exercícios e testes',
          ]}
        />
        <CardPlanos
          checked={false}
          nome={'Plano Expert'} // Conveys expert guidance
          valor={'R$1500,00'}
          beneficio={[
            'Acesso a todos os cursos, incluindo cursos VIP exclusivos',
            'Mentoria individual com especialista da área',
            'Acesso a plataforma de networking profissional',
            'Participação em eventos e workshops premium',
            'Certificado personalizado e oficial',
            'Prioridade no atendimento e suporte',
            'Garantia de devolução do dinheiro em 30 dias',
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
